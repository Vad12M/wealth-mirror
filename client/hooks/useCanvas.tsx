import { useDeleteAllCarsMutation, useGetCarsQuery, useUpdateCarMutation } from "@/store/api/carSlice";
import { useDeleteAllCardsMutation, useGetCardsQuery, useUpdateCardMutation } from "@/store/api/cardSlice";
import {
  useDeleteAllRealEstatesMutation,
  useGetRealEstatesQuery,
  useUpdateRealEstateMutation
} from "@/store/api/realEstateSlice";
import { useDeleteAllStocksMutation, useGetStocksQuery, useUpdateStockMutation } from "@/store/api/stockSlice";
import {
  useDeleteAllMutualFundsMutation,
  useGetMutualFundsQuery,
  useUpdateMutualFundMutation
} from "@/store/api/mutualFundSlice";
import { useDeleteAllIncomesMutation, useGetIncomesQuery, useUpdateIncomeMutation } from "@/store/api/incomeSlice";
import {
  useDeleteAllFixedDepositsMutation,
  useGetFixedDepositsQuery,
  useUpdateFixedDepositMutation
} from "@/store/api/fixedDepositSlice";
import {
  useDeleteAllExpensesMutation,
  useGetExpensesQuery,
  useUpdateExpensesMutation
} from "@/store/api/expensesSlice";


export default function useCanvas() {
  const [deleteAllCars] = useDeleteAllCarsMutation();
  const [deleteAllCards] = useDeleteAllCardsMutation();
  const [deleteAllRealEstates] = useDeleteAllRealEstatesMutation();
  const [deleteAllStocks] = useDeleteAllStocksMutation();
  const [deleteAllMutualFunds] = useDeleteAllMutualFundsMutation();
  const [deleteAllIncomes] = useDeleteAllIncomesMutation();
  const [deleteAllFixedDeposits] = useDeleteAllFixedDepositsMutation();
  const [deleteAllExpenses] = useDeleteAllExpensesMutation();

  const [updateCar] = useUpdateCarMutation();
  const [updateCard] = useUpdateCardMutation();
  const [updateRealEstate] = useUpdateRealEstateMutation();
  const [updateStock] = useUpdateStockMutation();
  const [updateMutualFund] = useUpdateMutualFundMutation();
  const [updateIncome] = useUpdateIncomeMutation();
  const [updateFixedDeposit] = useUpdateFixedDepositMutation();
  const [updateExpenses] = useUpdateExpensesMutation();

  const { data: cars } = useGetCarsQuery();
  const { data: cards } = useGetCardsQuery();
  const { data: realEstates } = useGetRealEstatesQuery();
  const { data: stocks } = useGetStocksQuery();
  const { data: mutualFunds } = useGetMutualFundsQuery();
  const { data: incomes } = useGetIncomesQuery();
  const { data: fixedDeposits } = useGetFixedDepositsQuery();
  const { data: expenses } = useGetExpensesQuery();

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
      case 'stock':
        updateStock(defaultParams);
        break;
      case 'mutualFund':
        updateMutualFund(defaultParams);
        break;
      case 'income':
        updateIncome(defaultParams);
        break;
      case 'fixedDeposit':
        updateFixedDeposit(defaultParams);
        break;
      case 'expenses':
        updateExpenses(defaultParams);
        break;
    }
  }

  const clearAll = () => {
    deleteAllCars();
    deleteAllCards();
    deleteAllRealEstates();
    deleteAllStocks();
    deleteAllMutualFunds();
    deleteAllIncomes();
    deleteAllFixedDeposits();
    deleteAllExpenses();
  }

  return {
    clearAll,
    updateItem,
    cars,
    cards,
    realEstates,
    stocks,
    mutualFunds,
    incomes,
    fixedDeposits,
    expenses
  }
}
