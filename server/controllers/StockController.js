import StockModel from '../models/Stock.js';

export const createStock = async (req, res) => {
  try {
    const newStock = new StockModel({
      ...req.body,
      user: req.userId,
    });
    await newStock.save();

    res.status(201).json({
      id: newStock._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateStock = async (req, res) => {
  try {
    const stock = await StockModel.findOne({ _id: req.params.id, user: req.userId });
    if (!stock) {
      return res.status(404).json({
        message: 'Stock not found',
      });
    }

    const updatedStock = await StockModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedStock);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getStocks = async (req, res) => {
  try {
    const stocks = await StockModel.find({ user: req.userId });
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteStock = async (req, res) => {
  try {
    const stock = await StockModel.findOne({ _id: req.params.id, user: req.userId });
    if (!stock) {
      return res.status(404).json({
        message: 'Stock not found',
      });
    }

    await StockModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Stock deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllStocks = async (req, res) => {
  try {
    const stocks = await StockModel.find({ user: req.userId });
    if (!stocks) {
      return res.status(404).json({
        message: 'Stock not found',
      });
    }

    await StockModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Stocks deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
