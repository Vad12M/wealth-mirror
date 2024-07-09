export interface ICar {
  id: string;
  name: string;
  brand: string;
  year: number;
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
  imageUrl?: string;
  salePrice?: number;
  expensesPerMonth?: number;
}
