import mongoose from "mongoose";

const FortuneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  type: { type: String, required: true }, // 'stock', 'bond', 'mutual fund', 'epf', 'ppf', 'nps'
  amount: { type: Number, required: true },
  quantity: { type: Number, required: true },
  profitAndLoss: {
    date: {
      type: Date,
      required: function () { return this.profitAndLoss && this.profitAndLoss.date != null; }
    },
    amount: {
      type: Number,
      required: function () { return this.profitAndLoss && this.profitAndLoss.amount != null; }
    },
  },
  periodOfReceivingDividends: { type: String, required: false },
  amountOfDividends: { type: Number, required: false },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("Fortune", FortuneSchema);
