import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  expensesPerMonth: {
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
  },
  profitAndLoss: {
    date: { type: Date, required: true },
    newPrice: { type: Number, required: true },
  },
  salePrice: { type: Number, required: false },
  image: { type: String, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("Car", CarSchema);
