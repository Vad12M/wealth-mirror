import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  expensesPerMonth: {
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
  },
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

export default mongoose.model("Car", CarSchema);
