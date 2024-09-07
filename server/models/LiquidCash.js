import mongoose from "mongoose";

const LiquidCashSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  amount: { type: Number, required: true },
  lastUpdated: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("LiquidCash", LiquidCashSchema);
