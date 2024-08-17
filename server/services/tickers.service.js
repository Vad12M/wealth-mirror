import { getAxiosInstance } from "../utils/http.js";

const baseUrl = process.env.POLYGON_BASE_URL;

const http = getAxiosInstance({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const buildApiUrl = (path) => {
  return `${baseUrl}${path}?active=true&apiKey=${process.env.POLYGON_API_KEY}`;
};

export const getStocksAPI = async (limit = 1000, search = '') => {
  try {
    const response = await http.get(buildApiUrl(`/tickers`), {
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
