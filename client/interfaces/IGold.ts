export interface IGold {
  _id: string;
  type: string;
  quantity: number;
  purchaseDate: string;
  amount: number;
  position: {
    x: number;
    y: number;
  };
}

export interface IGoldForm {
  type: string;
  quantity: number;
  purchaseDate: string;
  amount: number;
  position: {
    x: number;
    y: number;
  };
}
