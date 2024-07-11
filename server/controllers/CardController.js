import CardModel from '../models/Card.js';

export const createCard = async (req, res) => {
  try {
    const newCard = new CardModel({
      ...req.body,
      user: req.userId,
    });
    await newCard.save();

    res.status(201).json({
      id: newCard._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateCard = async (req, res) => {
  try {
    const card = await CardModel.findOne({ _id: req.params.id, user: req.userId });
    if (!card) {
      return res.status(404).json({
        message: 'Card not found',
      });
    }

    const updatedCard = await CardModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getCards = async (req, res) => {
  try {
    const cards = await CardModel.find({ user: req.userId });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteCard = async (req, res) => {
  try {
    const card = await CardModel.findOne({ _id: req.params.id, user: req.userId });
    if (!card) {
      return res.status(404).json({
        message: 'Card not found',
      });
    }

    await CardModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Card deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllCards = async (req, res) => {
  try {
    const cards = await CardModel.find({ user: req.userId });
    if (!cards) {
      return res.status(404).json({
        message: 'Cards not found',
      });
    }

    await CardModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Cards deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
