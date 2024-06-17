import mongoose from "mongoose";

const RealEstateSchema = new mongoose.Schema({
  location: { type: String, required: true },
  price: { type: Number, required: true },
  profitAndLoss: {
    date: { type: Date, required: true },
    newPrice: { type: Number, required: true },
  },
  salePrice: { type: Number, required: true },
  image: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("RealEstate", RealEstateSchema);
