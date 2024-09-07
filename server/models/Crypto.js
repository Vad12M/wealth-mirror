import mongoose from "mongoose";

const CryptoSchema = new mongoose.Schema({
  currencyName: { type: String, required: true },
  code: { type: String, required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("Crypto", CryptoSchema);
