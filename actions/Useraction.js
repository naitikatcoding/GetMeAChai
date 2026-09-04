"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
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