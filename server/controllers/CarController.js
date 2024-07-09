import CarModel from '../models/Car.js';

export const createCar = async (req, res) => {
  try {
    const newCar = new CarModel({
      ...req.body,
      user: req.userId,
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
