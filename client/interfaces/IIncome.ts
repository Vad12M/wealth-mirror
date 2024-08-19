export interface IIncome {
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

export interface IIncomeForm {
  amount: number;
  category: string;
  frequency: string;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
