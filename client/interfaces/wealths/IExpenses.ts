export interface IExpenses {
  _id: string;
  type: string;
  category: string;
  frequency?: string;
  amount: number;
  dateDebited: string;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IExpensesForm {
  amount: number;
  category: string;
  frequency?: string;
  type: string;
  dateDebited: string;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
