export interface IIncome {
  _id: string;
  category: string;
  frequency: string;
  amount: number;
  dateCredited: string;
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
  dateCredited: string;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
