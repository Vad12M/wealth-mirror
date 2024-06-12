import mongoose from "mongoose";

const WaitUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: String, required: false },
  message: { type: String, required: false },
}, {
  timestamps: true
});

export default mongoose.model("WaitUser", WaitUserSchema);
