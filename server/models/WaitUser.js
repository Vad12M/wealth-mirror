import mongoose from "mongoose";

const WaitUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, {
  timestamps: true
});

export default mongoose.model("WaitUser", WaitUserSchema);
