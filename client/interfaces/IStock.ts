export interface IStock {
  _id: string;
  name: string;
  code: string;
  quantity: number;
  amount: number;
  amountOfDividends: number;
  periodOfReceivingDividends: string;
  purchaseDate: string;
  type: string;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IStockForm {
  name: string;
  code: string;
  quantity: number;
  amount: number;
  amountOfDividends: number;
  periodOfReceivingDividends: string;
  type: string;
  image: string;
  position: {
    x: number;
    y: number;
  };
  purchaseDate: string;
}
