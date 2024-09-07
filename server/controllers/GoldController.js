import GoldModel from '../models/Gold.js';

export const createGold = async (req, res) => {
  try {
    const newGold = new GoldModel({
      ...req.body,
      user: req.userId,
    });
    await newGold.save();

    res.status(201).json({
      id: newGold._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateGold = async (req, res) => {
  try {
    const gold = await GoldModel.findOne({ _id: req.params.id, user: req.userId });
    if (!gold) {
      return res.status(404).json({
        message: 'Gold not found',
      });
    }

    const updatedGold = await GoldModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedGold);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getGolds = async (req, res) => {
  try {
    const golds = await GoldModel.find({ user: req.userId });
    res.status(200).json(golds);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteGold = async (req, res) => {
  try {
    const gold = await GoldModel.findOne({ _id: req.params.id, user: req.userId });
    if (!gold) {
      return res.status(404).json({
        message: 'Gold not found',
      });
    }

    await GoldModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Gold deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllGolds = async (req, res) => {
  try {
    const golds = await GoldModel.find({ user: req.userId });
    if (!golds) {
      return res.status(404).json({
        message: 'Golds not found',
      });
    }

    await GoldModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Golds deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
