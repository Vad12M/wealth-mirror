import LiquidCashModel from '../models/LiquidCash.js';

export const createLiquidCash = async (req, res) => {
  try {
    const newLiquidCash = new LiquidCashModel({
      ...req.body,
      user: req.userId,
    });
    await newLiquidCash.save();

    res.status(201).json({
      id: newLiquidCash._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateLiquidCash = async (req, res) => {
  try {
    const liquidCash = await LiquidCashModel.findOne({ _id: req.params.id, user: req.userId });
    if (!liquidCash) {
      return res.status(404).json({
        message: 'Liquid Cash not found',
      });
    }

    const updatedLiquidCash = await LiquidCashModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedLiquidCash);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getLiquidCashs = async (req, res) => {
  try {
    const liquidCashs = await LiquidCashModel.find({ user: req.userId });
    res.status(200).json(liquidCashs);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteLiquidCash = async (req, res) => {
  try {
    const liquidCash = await LiquidCashModel.findOne({ _id: req.params.id, user: req.userId });
    if (!liquidCash) {
      return res.status(404).json({
        message: 'Liquid Cash not found',
      });
    }

    await LiquidCashModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Liquid Cash deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllLiquidCashs = async (req, res) => {
  try {
    const liquidCashs = await LiquidCashModel.find({ user: req.userId });
    if (!liquidCashs) {
      return res.status(404).json({
        message: 'Liquid Cash not found',
      });
    }

    await LiquidCashModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Liquid Cash deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
