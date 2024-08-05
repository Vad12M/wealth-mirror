export interface ICard {
  _id: string;
  name: string;
  amount: number;
  type: string;
  image?: string;
  isPrimary: boolean;
  expensesPerMonth: number;
  position: {
    x: number;
    y: number;
  };
}

export interface ICardForm {
  name: string;
  type: string;
  amount: number;
  image?: string;
  isPrimary?: boolean;
  position: {
    x: number;
    y: number;
  };
  expensesPerMonth?: number;
}
