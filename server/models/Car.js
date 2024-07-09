import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  expensesPerMonth: {
    date: {
      type: Date,
      required: function() { return this.expensesPerMonth && this.expensesPerMonth.date != null; }
    },
    amount: {
      type: Number,
      required: function() { return this.expensesPerMonth && this.expensesPerMonth.amount != null; }
    },
  },
  profitAndLoss: {
    date: {
      type: Date,
      required: function() { return this.profitAndLoss && this.profitAndLoss.date != null; }
    },
    newPrice: {
      type: Number,
      required: function() { return this.profitAndLoss && this.profitAndLoss.newPrice != null; }
    },
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
