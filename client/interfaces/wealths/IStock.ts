export interface IStock {
  _id: string;
  name: string;
  code: string;
  quantity: number;
  amount: number;
  purchaseDate: string;
  type: string;
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
  type: string;
  position: {
    x: number;
    y: number;
  };
  purchaseDate: string;
}
