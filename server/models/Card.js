import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isPrimary: { type: Boolean, required: true },
  profitAndLoss: {
    date: { type: Date, required: true },
    newPrice: { type: Number, required: true },
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("Card", CardSchema);
