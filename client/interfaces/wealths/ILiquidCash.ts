export interface ILiquidCash {
  _id: string;
  bankName: string;
  amount: number;
  lastUpdated: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ILiquidCashForm {
  bankName: string;
  amount: number;
  lastUpdated: string;
  position: {
    x: number;
    y: number;
  };
}
