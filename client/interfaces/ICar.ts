export interface ICar {
  _id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  purchaseDate: string;
  variant: string;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ICarForm {
  name: string;
  price: number;
  brand: string;
  variant: string;
  purchaseDate: string;
  position: {
    x: number;
    y: number;
  };
  type: string;
  image?: string;
  salePrice?: number;
}
