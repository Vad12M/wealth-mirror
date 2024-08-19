import { getStocksAPI } from "../services/tickers.service.js";

export const getStocks = async (req, res) => {
  const {
    limit,
    search
  } = req.query;

  try {
    const stocks = await getStocksAPI(limit, search);
    res.status(200).json(stocks.results);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
