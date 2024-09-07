import mongoose from "mongoose";

const RealEstateSchema = new mongoose.Schema({
  category: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  amount: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  salePrice: { type: Number, required: false },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("RealEstate", RealEstateSchema);
