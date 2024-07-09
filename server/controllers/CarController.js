import CarModel from '../models/Car.js';
import UserModel from "../models/User.js";


export const createCar = async (req, res) => {
  try {
    const user = await UserModel.findById('66680cfc05fde10ae79f7fa4');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newCar = new CarModel({
      ...req.body,
      user: user._doc._id,
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

export const getCars = async (req, res) => {
  try {
    const cars = await CarModel.find({ user: req.userId });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
