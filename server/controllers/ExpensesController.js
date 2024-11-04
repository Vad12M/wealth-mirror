import ExpensesModel from '../models/Expenses.js';

export const createExpenses = async (req, res) => {
  try {
    const newExpenses = new ExpensesModel({
      ...req.body,
      user: req.userId,
    });
    await newExpenses.save();

    res.status(201).json({
      id: newExpenses._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateExpenses = async (req, res) => {
  try {
    const expenses = await ExpensesModel.findOne({ _id: req.params.id, user: req.userId });
    if (!expenses) {
      return res.status(404).json({
        message: 'Expenses not found',
      });
    }

    const updatedExpenses = await ExpensesModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedExpenses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpensesModel.find({ user: req.userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteExpenses = async (req, res) => {
  try {
    const expenses = await ExpensesModel.findOne({ _id: req.params.id, user: req.userId });
    if (!expenses) {
      return res.status(404).json({
        message: 'Expenses not found',
      });
    }

    await ExpensesModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Expenses deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllExpensess = async (req, res) => {
  try {
    const expenses = await ExpensesModel.find({ user: req.userId });
    if (!expenses) {
      return res.status(404).json({
        message: 'Expenses not found',
      });
    }

    await ExpensesModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Expenses deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
