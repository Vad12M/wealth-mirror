export interface ICar {
  _id: string;
  name: string;
  brand: string;
  year: number;
  type: string;
  price: number;
  imageUrl: string;
  salePrice: number;
  expensesPerMonth: number;
  position: {
    x: number;
    y: number;
  };
}

export interface ICarForm {
  name: string;
  price: number;
  year: number;
  brand: string;
  position: {
    x: number;
    y: number;
  };
  type: string;
  image?: string;
  salePrice?: number;
  expensesPerMonth?: number;
}
