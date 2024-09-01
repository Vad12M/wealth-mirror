import MutualFundModel from '../models/MutualFund.js';

export const createMutualFund = async (req, res) => {
  try {
    const newMutualFund = new MutualFundModel({
      ...req.body,
      user: req.userId,
    });
    await newMutualFund.save();

    res.status(201).json({
      id: newMutualFund._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateMutualFund = async (req, res) => {
  try {
    const mutualFund = await MutualFundModel.findOne({ _id: req.params.id, user: req.userId });
    if (!mutualFund) {
      return res.status(404).json({
        message: 'Mutual Fund not found',
      });
    }

    const updatedStock = await MutualFundModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedStock);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getMutualFunds = async (req, res) => {
  try {
    const mutualFunds = await MutualFundModel.find({ user: req.userId });
    res.status(200).json(mutualFunds);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteMutualFund = async (req, res) => {
  try {
    const mutualFund = await MutualFundModel.findOne({ _id: req.params.id, user: req.userId });
    if (!mutualFund) {
      return res.status(404).json({
        message: 'Mutual Fund not found',
      });
    }

    await MutualFundModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Mutual Fund deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllMutualFunds = async (req, res) => {
  try {
    const stocks = await MutualFundModel.find({ user: req.userId });
    if (!stocks) {
      return res.status(404).json({
        message: 'Mutual Fund not found',
      });
    }

    await MutualFundModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Mutual Fund deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
