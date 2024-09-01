import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isPrimary: { type: Boolean, required: false },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
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
  expensesPerMonth: {
    date: {
      type: Date,
      required: function () { return this.expensesPerMonth && this.expensesPerMonth.date != null; }
    },
    amount: {
      type: Number,
      required: function () { return this.expensesPerMonth && this.expensesPerMonth.amount != null; }
    },
  },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("Card", CardSchema);
