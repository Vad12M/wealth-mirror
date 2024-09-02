import IncomeModel from '../models/Income.js';

export const createIncome = async (req, res) => {
  try {
    const newIncome = new IncomeModel({
      ...req.body,
      user: req.userId,
    });
    await newIncome.save();

    res.status(201).json({
      id: newIncome._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateIncome = async (req, res) => {
  try {
    const income = await IncomeModel.findOne({ _id: req.params.id, user: req.userId });
    if (!income) {
      return res.status(404).json({
        message: 'Income not found',
      });
    }

    const updatedIncome = await IncomeModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeModel.find({ user: req.userId });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteIncome = async (req, res) => {
  try {
    const income = await IncomeModel.findOne({ _id: req.params.id, user: req.userId });
    if (!income) {
      return res.status(404).json({
        message: 'Income not found',
      });
    }

    await IncomeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Income deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllIncomes = async (req, res) => {
  try {
    const incomes = await IncomeModel.find({ user: req.userId });
    if (!incomes) {
      return res.status(404).json({
        message: 'Incomes not found',
      });
    }

    await IncomeModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Incomes deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
