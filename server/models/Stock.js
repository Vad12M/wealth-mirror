import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  amount: { type: Number, required: true },
  quantity: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  type: { type: String, required: true },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("Stock", StockSchema);
