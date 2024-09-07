export interface ICar {
  _id: string;
  name: string;
  brand: string;
  type: string;
  amount: number;
  purchaseDate: string;
  variant: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ICarForm {
  name: string;
  amount: number;
  brand: string;
  variant: string;
  purchaseDate: string;
  position: {
    x: number;
    y: number;
  };
  type: string;
}
