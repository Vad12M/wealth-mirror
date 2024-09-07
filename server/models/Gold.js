import mongoose from "mongoose";

const GoldSchema = new mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  quantity: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("Gold", GoldSchema);
