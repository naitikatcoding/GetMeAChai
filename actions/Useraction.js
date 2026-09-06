"use server";

import Razorpay from "razorpay";
import { revalidatePath } from "next/cache";

import Payment from "@/models/Payment";

import User from "@/models/User";

import connectDb from "@/db/connectDb";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDb();

  let creator = await User.findOne({ username: to_username });

  const key_id = (
    creator?.razorpayid ||
    process.env.NEXT_PUBLIC_KEY_ID ||
    ""
  ).trim();

  const key_secret = (
    creator?.razorpaysecret ||
    process.env.KEY_SECRET ||
    process.env.NEXT_PUBLIC_KEY_SECRET ||
    ""
  ).trim();

  if (!key_id || !key_secret) {
    throw new Error("Payment gateway credentials are not configured.");
  }

  const instance = new Razorpay({
    key_id: key_id,
    key_secret: key_secret,
  });

  const options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  const x = await instance.orders.create(options);

  await Payment.create({
    o_id: x.id,
    amount: Number.parseInt(amount) / 100,
    to_user: to_username,
    user_name: paymentform?.user_name?.trim() || "Anonymous",
    message: paymentform?.message?.trim() || "",
  });

  return x;
};

export const fetchUser = async (username) => {
  await connectDb();

  let clean = (username || "").trim();
  if (!clean) return null;

  const escapedClean = clean.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let u = await User.findOne({
    $or: [
      { username: clean },
      { username: clean.toLowerCase() },
      { username: { $regex: new RegExp(`^${escapedClean}$`, "i") } },
    ],
  });

  // If not found by direct username, check if username matches an email prefix or email
  if (!u) {
    u = await User.findOne({
      $or: [
        { email: clean.toLowerCase() },
        { email: new RegExp(`^${escapedClean}@`, "i") },
      ],
    });
  }

  if (!u) {
    return null;
  }

  return JSON.parse(JSON.stringify(u));
};

export const fetchUserByEmail = async (email) => {
  await connectDb();

  if (!email) return null;
  const cleanEmail = email.trim().toLowerCase();
  const escapedEmail = cleanEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let u = await User.findOne({
    $or: [
      { email: cleanEmail },
      { email: { $regex: new RegExp(`^${escapedEmail}$`, "i") } },
    ],
  });

  if (!u) {
    return null;
  }

  return JSON.parse(JSON.stringify(u));
};

export const updateUser = async (email, userData) => {
  await connectDb();

  const normalizedEmail = (email || "").trim().toLowerCase();

  // Validate unique username if username is changing
  if (userData.username) {
    const cleanUsername = userData.username.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "");
    if (!cleanUsername) {
      return { success: false, message: "Username cannot be empty or invalid" };
    }

    const existingUser = await User.findOne({ username: cleanUsername });
    if (existingUser && existingUser.email?.toLowerCase() !== normalizedEmail) {
      return { success: false, message: "Username is already taken by another creator" };
    }
    userData.username = cleanUsername;
  }

  const updatedUser = await User.findOneAndUpdate(
    { email: { $regex: new RegExp(`^${normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") } },
    {
      name: userData.name?.trim() || "",
      username: userData.username,
      profilePic: userData.profilePic?.trim() || "",
      coverPic: userData.coverPic?.trim() || "",
      razorpayid: userData.razorpayid?.trim() || "",
      razorpaysecret: userData.razorpaysecret?.trim() || "",
      isProfileSaved: true,
      updatedAt: new Date(),
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return {
      success: false,
      message: "User not found",
    };
  }

  // Invalidate cache across pages so username page immediately reflects changes
  try {
    revalidatePath(`/${updatedUser.username}`);
    if (userData.username && userData.username !== updatedUser.username) {
      revalidatePath(`/${userData.username}`);
    }
    revalidatePath("/dashboard");
    revalidatePath("/[username]", "page");
    revalidatePath("/", "layout");
  } catch (err) {
    console.error("Cache revalidation error:", err);
  }

  return {
    success: true,
    message: "Profile updated successfully!",
    user: JSON.parse(JSON.stringify(updatedUser)),
  };
};

export const fetchpayments = async (username) => {
  await connectDb();

  let p = await Payment.find({
    to_user: username,
    done: true,
  })
    .sort({ amount: -1 })
    .limit(10)
    .lean();

  return JSON.parse(JSON.stringify(p));
};