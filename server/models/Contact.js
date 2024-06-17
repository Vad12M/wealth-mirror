import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true
});

export default mongoose.model("Contact", ContactSchema);
