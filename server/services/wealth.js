import CarModel from "../models/Car.js";
import CardModel from "../models/Card.js";
import CryptoModel from "../models/Crypto.js";
import ExpensesModel from "../models/Expenses.js";
import FixedDepositModel from "../models/FixedDeposit.js";
import GoldModel from "../models/Gold.js";
import IncomeModel from "../models/Income.js";
import LiquidCashModel from "../models/LiquidCash.js";
import MutualFundModel from "../models/MutualFund.js";
import RealEstateModel from "../models/RealEstate.js";
import SavingModel from "../models/Saving.js";
import StockModel from "../models/Stock.js";


export const removeAllWealth = async (req, res) => {
  await CarModel.deleteMany({ user: req.userId });
  await CardModel.deleteMany({ user: req.userId });
  await CryptoModel.deleteMany({ user: req.userId });
  await ExpensesModel.deleteMany({ user: req.userId });
  await FixedDepositModel.deleteMany({ user: req.userId });
  await GoldModel.deleteMany({ user: req.userId });
  await IncomeModel.deleteMany({ user: req.userId });
  await LiquidCashModel.deleteMany({ user: req.userId });
  await MutualFundModel.deleteMany({ user: req.userId });
  await RealEstateModel.deleteMany({ user: req.userId });
  await SavingModel.deleteMany({ user: req.userId });
  await StockModel.deleteMany({ user: req.userId });

}
