import UserModel from "../models/User.js";
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

    if (user.status === 'active') {
      const nowTimestamp = new Date().getTime();
      if (user.expiredPayment < nowTimestamp) {
        await UserModel.findByIdAndUpdate(user._id, { status: 'inactive' });
      }
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET,
      { expiresIn: '30d' }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export const googleLogin = async (req, res) => {
  const { googleId, email, name } = req.body;

  try {
    let user = await UserModel.findOne({ $or: [{ googleId }, { email }] });

    if (!user) {
      user = new UserModel({
        googleId,
        email,
        name,
      });
      await user.save();
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET,
      { expiresIn: '30d' }
    );

    // Відправка токена на фронтенд
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


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

export const updateMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    const { passwordHash, ...userData } = user._doc;
    const updatedUser = await UserModel.findByIdAndUpdate(req.userId, {
      ...user._doc,
      ...req.body,
    }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error in updateMe:', err);
    res.status(500).json({
      message: err.message,
    });
  }
}

export const updatePassword = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    const validPassword = await bcrypt.compare(req.body.oldPassword, user.passwordHash);
    if (!validPassword) {
      return res.status(400).json({
        message: 'Invalid password',
      });
    }
    const salt = await bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hash(req.body.newPassword, salt);
    const updatedUser = await UserModel.findByIdAndUpdate(req.userId, {
      passwordHash,
    }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error in updatePassword:', err);
    res.status(500).json({
      message: err.message,
    });
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error in getUsers:', err);
    res.status(500).json({
      message: err.message,
    });
  }
}
