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

export const updateCar = async (req, res) => {
  try {
    const car = await CarModel.findOne({ _id: req.params.id, user: req.userId });
    if (!car) {
      return res.status(404).json({
        message: 'Car not found',
      });
    }

    const updatedCar = await CarModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedCar);
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
