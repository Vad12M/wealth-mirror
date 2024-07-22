import RealEstateModel from '../models/RealEstate.js';

export const createRealEstate = async (req, res) => {
  try {
    const newRealEstate = new RealEstateModel({
      ...req.body,
      user: req.userId,
    });
    await newRealEstate.save();

    res.status(201).json({
      id: newRealEstate._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const updateRealEstate = async (req, res) => {
  try {
    const realEstate = await RealEstateModel.findOne({ _id: req.params.id, user: req.userId });
    if (!realEstate) {
      return res.status(404).json({
        message: 'Real Estate not found',
      });
    }

    const updatedRealEstate = await RealEstateModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedRealEstate);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


export const getRealEstates = async (req, res) => {
  try {
    const realEstates = await RealEstateModel.find({ user: req.userId });
    res.status(200).json(realEstates);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteRealEstate = async (req, res) => {
  try {
    const realEstate = await RealEstateModel.findOne({ _id: req.params.id, user: req.userId });
    if (!realEstate) {
      return res.status(404).json({
        message: 'Real Estate not found',
      });
    }

    await RealEstateModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Real Estate deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const deleteAllRealEstates = async (req, res) => {
  try {
    const realEstates = await RealEstateModel.find({ user: req.userId });
    if (!realEstates) {
      return res.status(404).json({
        message: 'Real Estates not found',
      });
    }

    await RealEstateModel.deleteMany({ user: req.userId });
    res.status(200).json({
      message: 'Real Estates deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const getRealEstatesAmount = async (req, res) => {
  try {
    const realEstates = await RealEstateModel.find({ user: req.userId });
    const amount = realEstates.reduce((acc, realEstate) => acc + realEstate.price, 0);
    res.status(200).json({
      amount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
