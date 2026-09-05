import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
  await connectDb();

  let body = await req.formData();
  body = Object.fromEntries(body);

  const orderId = body.razorpay_order_id;

  let p = await Payment.findOne({
    $or: [{ o_id: orderId }, { oid: orderId }],
  });

  if (!p) {
    return NextResponse.json(
      { success: false, message: "Order Id not found" },
      { status: 404 }
    );
  }

  let user = await User.findOne({ username: p.to_user });

  const secret = (
    user?.razorpaysecret ||
    process.env.KEY_SECRET ||
    process.env.NEXT_PUBLIC_KEY_SECRET ||
    ""
  ).trim();

  let xx = false;

  try {
    xx = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
      secret
    );
  } catch (err) {
    console.error("Signature verification error:", err);
    xx = false;
  }

  if (xx) {
    const updatedPayment = await Payment.findOneAndUpdate(
      { $or: [{ o_id: orderId }, { oid: orderId }] },
      { done: true },
      { new: true }
    );

    console.log("Payment completed:", updatedPayment);

    const redirectUrl = new URL(
      `/${updatedPayment.to_user}?paymentdone=true`,
      req.url
    );

    return NextResponse.redirect(redirectUrl, 303);
  } else {
    return NextResponse.json(
      { success: false, message: "Payment Verification Failed" },
      { status: 400 }
    );
  }
};