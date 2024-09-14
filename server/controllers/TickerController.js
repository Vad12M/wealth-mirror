import { getAggregatesForStockAPI, getCryptosAPI, getStockNewsAPI, getStocksAPI } from "../services/tickers.service.js";

export const getExternalStocks = async (req, res) => {
  const { limit, search } = req.query;

  try {
    const stocks = await getStocksAPI(limit, search);
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const getExternalStockNews = async (req, res) => {
  const { stockCode } = req.query;

  try {
    const news = await getStockNewsAPI(stockCode);
    res.status(200).json(news.results);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const getAggregatesForStock = async (req, res) => {
  const { stockCode, timespan, from, to } = req.query;

  try {
    const aggregates = await getAggregatesForStockAPI(stockCode, timespan, from, to);
    res.status(200).json(aggregates.results);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

export const getExternalCryptos = async (req, res) => {
  const { limit, search } = req.query;

  try {
    const stocks = await getCryptosAPI(limit, search);
    res.status(200).json(stocks.results);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
