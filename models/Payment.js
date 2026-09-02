const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  user_name: { type: String, required: true },
  to_user: { type: String, required: true },
  o_id: { type: String, required: true },
  message: { type: String },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  Done: { type: Boolean, default: false },
});


const Payment = model("Payment" , PaymentSchema);
export default mongoose.models.payment || Payment;