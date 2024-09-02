import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
  category: { type: String, required: true },
  frequency: { type: String, required: true },
  amount: { type: Number, required: true },
  dateCredited: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("Income", IncomeSchema);
