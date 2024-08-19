export interface IExpense {
  _id: string;
  category: string;
  frequency: string;
  amount: number;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IExpenseForm {
  amount: number;
  category: string;
  frequency: string;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
