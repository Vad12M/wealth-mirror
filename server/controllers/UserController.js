import UserModel from "../models/User.js";
import WaitUserModel from "../models/WaitUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const { password, ...data } = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const doc = new UserModel({
      ...data, passwordHash,
    });

    await doc.save();
    res.status(200).json({
      message: 'User registered successfully'
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        message: 'User does not exist',
      });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.passwordHash);
    if (!validPassword) {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign({
      userId: user._id,
    }, process.env.SECRET, { expiresIn: "12h" });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}


export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    const { passwordHash, ...userData } = user._doc;
    res.status(200).json(userData);
  } catch (err) {
    console.error('Error in getMe:', err);
    res.status(500).json({
      message: err.message,
    });
  }
}
