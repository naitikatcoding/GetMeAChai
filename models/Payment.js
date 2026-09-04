import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  user_name: { type: String, default: "Anonymous" },
  to_user: { type: String, required: true },
  o_id: { type: String, required: true },
  message: { type: String, default: "" },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  Done: { type: Boolean, default: false },
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);