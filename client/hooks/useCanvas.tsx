import { useDeleteAllCarsMutation, useUpdateCarMutation } from "@/store/api/carSlice";
import { useDeleteAllCardsMutation, useUpdateCardMutation } from "@/store/api/cardSlice";


export default function useCanvas() {
  const [deleteAllCars] = useDeleteAllCarsMutation();
  const [deleteAllCards] = useDeleteAllCardsMutation();

  const [updateCar] = useUpdateCarMutation();
  const [updateCard] = useUpdateCardMutation();

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
      default:
        break;
    }
  }

  const clearAll = () => {
    deleteAllCars();
    deleteAllCards();
  }

  return {
    clearAll,
    updateItem
  }

}
