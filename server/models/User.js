import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
  role: { type: String, required: true, default: "user" },
  status: { type: String, required: true, default: "inactive" },
  expiredPayment: { type: Date },
  passwordHash: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.model("User", UserSchema);
