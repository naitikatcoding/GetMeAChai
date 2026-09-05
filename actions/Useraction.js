"use server";

import Razorpay from "razorpay";

import Payment from "@/models/Payment";

import User from "@/models/User";

import connectDb from "@/db/connectDb";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDb();

  const key_id = (process.env.NEXT_PUBLIC_KEY_ID || "").trim();

  const key_secret = (
    process.env.KEY_SECRET ||
    process.env.NEXT_PUBLIC_KEY_SECRET ||
    ""
  ).trim();

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

  let u = await User.findOne({ username: username });

  if (!u) {
    return null;
  }

  let user = u.toObject({ flattenObjectIds: true });

  return user;
};

export const fetchUserByEmail = async (email) => {
  await connectDb();

  let u = await User.findOne({ email: email });

  if (!u) {
    return null;
  }

  return JSON.parse(JSON.stringify(u));
};

export const updateUser = async (email, userData) => {
  await connectDb();

  const updatedUser = await User.findOneAndUpdate(
    { email: email },
    {
      name: userData.name,
      username: userData.username,
      profilePic: userData.profilePic,
      coverPic: userData.coverPic,
      razorpayid: userData.razorpayid,
      razorpaysecret: userData.razorpaysecret,
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

  return {
    success: true,
    message: "Profile updated successfully",
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