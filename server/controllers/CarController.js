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
        message: 'OldCar not found',
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

export const deleteCar = async (req, res) => {
  try {
    const car = await CarModel.findOne({ _id: req.params.id, user: req.userId });
    if (!car) {
      return res.status(404).json({
        message: 'OldCar not found',
      });
    }

    await CarModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'OldCar deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllCars = async (req, res) => {
  try {
    const cars = await CarModel.find({ user: req.userId });
    if (!cars) {
      return res.status(404).json({
        message: 'Cars not found',
      });
    }

    await CarModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Cars deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const getCarsAmount = async (req, res) => {
  try {
    const cars = await CarModel.find({ user: req.userId });
    const amount = cars.reduce((total, car) => total + !!car.salePrice ? 0 : car.price, 0);
    res.status(200).json({
      amount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
