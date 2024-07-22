export interface IFortune {
  _id: string;
  name: string;
  code: string;
  type: string;
  amount: number;
  quantity: number;
  periodOfReceivingDividends: string;
  amountOfDividends: number;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IFortuneForm {
  name: string;
  code: string;
  type: string;
  amount: number;
  quantity: number;
  periodOfReceivingDividends?: string;
  amountOfDividends?: number;
  position: {
    x: number;
    y: number;
  };
  image?: string;
  salePrice?: number;
}
