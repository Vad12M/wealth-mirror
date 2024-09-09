import { getAxiosInstance } from "../utils/http.js";

const baseUrl = process.env.POLYGON_BASE_URL;

const http = getAxiosInstance({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const buildApiUrl = (path) => {
  return `${baseUrl}${path}?active=true&apiKey=${process.env.POLYGON_API_KEY}/v3/reference`;
};


export const getStocksAPI = async (limit = 1000, search = '') => {
  try {
    const response = await http.get(buildApiUrl(`/v3/reference/tickers`), {
      params: {
        limit,
        search,
        market: 'stocks',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};

export const getStockNewsAPI = async (stockCode) => {
  try {
    const response = await http.get(buildApiUrl(`/v3/reference/news`), {
      params: {
        ticker: stockCode,
        limit: 10
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};

export const getAggregatesForStockAPI = async (stockCode, timespan, from, to) => {
  try {
    const response = await http.get(buildApiUrl(`/v2/aggs/ticker/${stockCode}/1/${timespan}/${from}/${to}`));
    return response.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};


export const getCryptosAPI = async (limit = 1000, search = '') => {
  try {
    const response = await http.get(buildApiUrl(`/v3/reference/tickers`), {
      params: {
        limit,
        search,
        market: 'crypto',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptos:', error);
    throw error;
  }
};
