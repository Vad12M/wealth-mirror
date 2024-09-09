export interface ICard {
  _id: string;
  type: string;
  bankName: string;
  name: string;
  amount: number;
  isPrimary: boolean;
  expirationDate: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ICardForm {
  type: string;
  bankName: string;
  name: string;
  amount: number;
  expirationDate: string;
  isPrimary?: boolean;
  position: {
    x: number;
    y: number;
  };
  expensesPerMonth?: number;
}
