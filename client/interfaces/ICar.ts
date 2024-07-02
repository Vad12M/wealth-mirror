export interface ICar {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  salePrice: number;
  expensesPerMonth: number;
}

export interface ICarForm {
  name: string;
  price: number;
  type: string;
  imageUrl?: string;
  salePrice?: number;
  expensesPerMonth?: number;
}
