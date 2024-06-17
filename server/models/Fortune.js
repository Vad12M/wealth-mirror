import mongoose from "mongoose";

const FortuneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // 'stock', 'bond', 'mutual fund', 'epf', 'ppf', 'nps'
  code: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  profitAndLoss: {
    date: { type: Date, required: true },
    newPrice: { type: Number, required: true },
  },
  periodOfReceivingDividends: { type: String, required: false },
  amountOfDividends: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("Fortune", FortuneSchema);
