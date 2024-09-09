import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  bankName: { type: String, required: true },
  isPrimary: { type: Boolean, required: false },
  amount: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("Card", CardSchema);
