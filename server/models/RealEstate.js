import mongoose from "mongoose";

const RealEstateSchema = new mongoose.Schema({
  location: { type: String, required: true },
  price: { type: Number, required: true },
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
  salePrice: { type: Number, required: false },
  image: { type: String, required: false },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});

export default mongoose.model("RealEstate", RealEstateSchema);
