export interface IFixedDeposit {
  _id: string;
  name: string;
  amount: number;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IFixedDepositForm {
  amount: number;
  name: string;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
