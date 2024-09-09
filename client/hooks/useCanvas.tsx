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
import { useDeleteAllGoldMutation, useGetGoldsQuery, useUpdateGoldMutation } from "@/store/api/goldSlice";
import { useDeleteAllCryptosMutation, useGetCryptosQuery, useUpdateCryptoMutation } from "@/store/api/cryptoSlice";
import {
  useDeleteAllLiquidCashMutation,
  useGetLiquidCashsQuery,
  useUpdateLiquidCashMutation
} from "@/store/api/luquidCashSlice";
import { useDeleteAllSavingMutation, useGetSavingsQuery, useUpdateSavingMutation } from "@/store/api/savingSlice";


export default function useCanvas() {
  const [deleteAllCars] = useDeleteAllCarsMutation();
  const [deleteAllCards] = useDeleteAllCardsMutation();
  const [deleteAllRealEstates] = useDeleteAllRealEstatesMutation();
  const [deleteAllStocks] = useDeleteAllStocksMutation();
  const [deleteAllMutualFunds] = useDeleteAllMutualFundsMutation();
  const [deleteAllIncomes] = useDeleteAllIncomesMutation();
  const [deleteAllFixedDeposits] = useDeleteAllFixedDepositsMutation();
  const [deleteAllExpenses] = useDeleteAllExpensesMutation();
  const [deleteAllGold] = useDeleteAllGoldMutation();
  const [deleteAllCryptos] = useDeleteAllCryptosMutation();
  const [deleteAllLiquidCash] = useDeleteAllLiquidCashMutation();
  const [deleteAllSavings] = useDeleteAllSavingMutation();

  const [updateCar] = useUpdateCarMutation();
  const [updateCard] = useUpdateCardMutation();
  const [updateRealEstate] = useUpdateRealEstateMutation();
  const [updateStock] = useUpdateStockMutation();
  const [updateMutualFund] = useUpdateMutualFundMutation();
  const [updateIncome] = useUpdateIncomeMutation();
  const [updateFixedDeposit] = useUpdateFixedDepositMutation();
  const [updateExpenses] = useUpdateExpensesMutation();
  const [updateGold] = useUpdateGoldMutation();
  const [updateCrypto] = useUpdateCryptoMutation();
  const [updateLiquidCash] = useUpdateLiquidCashMutation();
  const [updateSaving] = useUpdateSavingMutation();

  const { data: cars } = useGetCarsQuery();
  const { data: cards } = useGetCardsQuery();
  const { data: realEstates } = useGetRealEstatesQuery();
  const { data: stocks } = useGetStocksQuery();
  const { data: mutualFunds } = useGetMutualFundsQuery();
  const { data: incomes } = useGetIncomesQuery();
  const { data: fixedDeposits } = useGetFixedDepositsQuery();
  const { data: expenses } = useGetExpensesQuery();
  const { data: golds } = useGetGoldsQuery();
  const { data: cryptos } = useGetCryptosQuery();
  const { data: liquidCashs } = useGetLiquidCashsQuery();
  const { data: savings } = useGetSavingsQuery();

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
      case 'gold':
        updateGold(defaultParams);
        break;
      case 'crypto':
        updateCrypto(defaultParams);
        break;
      case 'liquidCash':
        updateLiquidCash(defaultParams);
        break;
      case 'saving':
        updateSaving(defaultParams);
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
    deleteAllGold();
    deleteAllCryptos();
    deleteAllLiquidCash();
    deleteAllSavings();
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
    expenses,
    golds,
    cryptos,
    liquidCashs,
    savings
  }
}
