import CryptoModel from '../models/Crypto.js';

export const createCrypto = async (req, res) => {
  try {
    const newCrypto = new CryptoModel({
      ...req.body,
      user: req.userId,
    });
    await newCrypto.save();

    res.status(201).json({
      id: newCrypto._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateCrypto = async (req, res) => {
  try {
    const crypto = await CryptoModel.findOne({ _id: req.params.id, user: req.userId });
    if (!crypto) {
      return res.status(404).json({
        message: 'Crypto not found',
      });
    }

    const updatedCrypto = await CryptoModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedCrypto);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getCryptos = async (req, res) => {
  try {
    const cryptos = await CryptoModel.find({ user: req.userId });
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteCrypto = async (req, res) => {
  try {
    const crypto = await CryptoModel.findOne({ _id: req.params.id, user: req.userId });
    if (!crypto) {
      return res.status(404).json({
        message: 'Crypto not found',
      });
    }

    await CryptoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Crypto deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllCryptos = async (req, res) => {
  try {
    const cryptos = await CryptoModel.find({ user: req.userId });
    if (!cryptos) {
      return res.status(404).json({
        message: 'Cryptos not found',
      });
    }

    await CryptoModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Cryptos deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
