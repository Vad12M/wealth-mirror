import mongoose from "mongoose";

const SavingSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  frequency: { type: String, required: true },
  amount: { type: Number, required: true },
  lastUpdated: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
}, {
  timestamps: true
});

export default mongoose.model("Saving", SavingSchema);
