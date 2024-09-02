import mongoose from "mongoose";

const ExpensesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  category: { type: String, required: true },
  frequency: { type: String, required: false },
  amount: { type: Number, required: true },
  dateDebited: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("Expenses", ExpensesSchema);
