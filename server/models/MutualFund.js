import mongoose from "mongoose";

const MutualFundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  category: { type: String, required: true },
  units: { type: Number, required: true },
  purchasePrice: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  image: { type: String, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("MutualFund", MutualFundSchema);
