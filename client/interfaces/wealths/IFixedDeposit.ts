export interface IFixedDeposit {
  _id: string;
  name: string;
  amount: number;
  dateOfPurchase: string;
  maturityDate: string;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IFixedDepositForm {
  amount: number;
  name: string;
  dateOfPurchase: string;
  maturityDate: string;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
