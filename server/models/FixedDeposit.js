import mongoose from "mongoose";

const FixedDepositSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  dateOfPurchase: { type: Date, required: true },
  maturityDate: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("FixedDeposit", FixedDepositSchema);
