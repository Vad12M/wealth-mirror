import WaitUserModel from "../models/WaitUser.js";
import ContactModel from "../models/Contact.js";

export const addWaitUser = async (req, res) => {
  try {
    const existingUser = await WaitUserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const user = new WaitUserModel(req.body);
    await user.save();
    res.status(200).json({
      message: 'User added to waitlist',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}


export const contact = async (req, res) => {
  try {
    const user = new ContactModel(req.body);
    await user.save();
    res.status(200).json({
      message: 'Contact added',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}
