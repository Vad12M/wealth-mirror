import { useDeleteAllCarsMutation, useGetCarsQuery, useUpdateCarMutation } from "@/store/api/carSlice";
import { useDeleteAllCardsMutation, useGetCardsQuery, useUpdateCardMutation } from "@/store/api/cardSlice";
import {
  useDeleteAllRealEstatesMutation,
  useGetRealEstatesQuery,
  useUpdateRealEstateMutation
} from "@/store/api/realEstateSlice";
import {
  useDeleteAllFortunesMutation,
  useGetFortunesQuery,
  useUpdateFortuneMutation
} from "@/store/api/fortuneSlice";
import { useDeleteAllStocksMutation, useGetStocksQuery, useUpdateStockMutation } from "@/store/api/stockSlice";


export default function useCanvas() {
  const [deleteAllCars] = useDeleteAllCarsMutation();
  const [deleteAllCards] = useDeleteAllCardsMutation();
  const [deleteAllRealEstates] = useDeleteAllRealEstatesMutation();
  const [deleteAllFortunes] = useDeleteAllFortunesMutation();
  const [deleteAllStocks] = useDeleteAllStocksMutation();

  const [updateCar] = useUpdateCarMutation();
  const [updateCard] = useUpdateCardMutation();
  const [updateRealEstate] = useUpdateRealEstateMutation();
  const [updateFortune] = useUpdateFortuneMutation();
  const [updateStock] = useUpdateStockMutation();

  const { data: cars } = useGetCarsQuery();
  const { data: cards } = useGetCardsQuery();
  const { data: realEstates } = useGetRealEstatesQuery();
  const { data: fortunes } = useGetFortunesQuery();
  const { data: stocks } = useGetStocksQuery();

  const updateItem = (id: string, type: string, x: number, y: number) => {
    const defaultParams = {
      id, position: { x, y }
    }

    switch (type) {
      case 'car':
        updateCar(defaultParams);
        break;
      case 'card':
        updateCard(defaultParams);
        break;
      case 'realEstate':
        updateRealEstate(defaultParams);
        break;
      case 'fortune':
        updateFortune(defaultParams);
        break;
      case 'stock':
        updateStock(defaultParams);
        break;
    }
  }

  const clearAll = () => {
    deleteAllCars();
    deleteAllCards();
    deleteAllRealEstates();
    deleteAllFortunes();
    deleteAllStocks();
  }

  return {
    clearAll,
    updateItem,
    cars,
    cards,
    realEstates,
    fortunes,
    stocks
  }
}
