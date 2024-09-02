import FixedDepositModel from '../models/FixedDeposit.js';

export const createFixedDeposit = async (req, res) => {
  try {
    const newFixedDeposit = new FixedDepositModel({
      ...req.body,
      user: req.userId,
    });
    await newFixedDeposit.save();

    res.status(201).json({
      id: newFixedDeposit._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateFixedDeposit = async (req, res) => {
  try {
    const fixedDeposit = await FixedDepositModel.findOne({ _id: req.params.id, user: req.userId });
    if (!fixedDeposit) {
      return res.status(404).json({
        message: 'Fixed deposit not found',
      });
    }

    const updatedFixedDeposit = await FixedDepositModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedFixedDeposit);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getFixedDeposits = async (req, res) => {
  try {
    const fixedDeposits = await FixedDepositModel.find({ user: req.userId });
    res.status(200).json(fixedDeposits);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteFixedDeposit = async (req, res) => {
  try {
    const fixedDeposit = await FixedDepositModel.findOne({ _id: req.params.id, user: req.userId });
    if (!fixedDeposit) {
      return res.status(404).json({
        message: 'Fixed deposit not found',
      });
    }

    await FixedDepositModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Fixed deposit deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllFixedDeposits = async (req, res) => {
  try {
    const fixedDeposits = await FixedDepositModel.find({ user: req.userId });
    if (!fixedDeposits) {
      return res.status(404).json({
        message: 'Fixed deposits not found',
      });
    }

    await FixedDepositModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Fixed deposits deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
