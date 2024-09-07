import SavingModel from '../models/Saving.js';

export const createSaving = async (req, res) => {
  try {
    const newSaving = new SavingModel({
      ...req.body,
      user: req.userId,
    });
    await newSaving.save();

    res.status(201).json({
      id: newSaving._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateSaving = async (req, res) => {
  try {
    const saving = await SavingModel.findOne({ _id: req.params.id, user: req.userId });
    if (!saving) {
      return res.status(404).json({
        message: 'Saving not found',
      });
    }

    const updatedSaving = await SavingModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedSaving);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getSavings = async (req, res) => {
  try {
    const savings = await SavingModel.find({ user: req.userId });
    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteSaving = async (req, res) => {
  try {
    const saving = await SavingModel.findOne({ _id: req.params.id, user: req.userId });
    if (!saving) {
      return res.status(404).json({
        message: 'Saving not found',
      });
    }

    await SavingModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Saving deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllSavings = async (req, res) => {
  try {
    const saving = await SavingModel.find({ user: req.userId });
    if (!saving) {
      return res.status(404).json({
        message: 'Savings not found',
      });
    }

    await SavingModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Savings deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
