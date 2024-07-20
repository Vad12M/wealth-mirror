import FortuneModel from '../models/Fortune.js';

export const createFortune = async (req, res) => {
  try {
    const newFortune = new FortuneModel({
      ...req.body,
      user: req.userId,
    });
    await newFortune.save();

    res.status(201).json({
      id: newFortune._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateFortune = async (req, res) => {
  try {
    const fortune = await FortuneModel.findOne({ _id: req.params.id, user: req.userId });
    if (!fortune) {
      return res.status(404).json({
        message: 'Fortune not found',
      });
    }

    const updatedFortune = await FortuneModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedFortune);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getFortunes = async (req, res) => {
  try {
    const fortunes = await FortuneModel.find({ user: req.userId });
    res.status(200).json(fortunes);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteFortune = async (req, res) => {
  try {
    const fortune = await FortuneModel.findOne({ _id: req.params.id, user: req.userId });
    if (!fortune) {
      return res.status(404).json({
        message: 'Fortune not found',
      });
    }

    await FortuneModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Fortune deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllFortunes = async (req, res) => {
  try {
    const fortunes = await FortuneModel.find({ user: req.userId });
    if (!fortunes) {
      return res.status(404).json({
        message: 'Fortune not found',
      });
    }

    await FortuneModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Fortunes deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
