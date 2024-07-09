import CarModel from '../models/Car.js';
import UserModel from "../models/User.js";


export const createCar = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    const newCar = new CarModel({
      ...req.body,
      user: user._id,
    });
    await newCar.save();
    res.status(201).json({
      id: newCar._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

