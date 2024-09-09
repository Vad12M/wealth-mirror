export interface ICrypto {
  _id: string;
  currencyName: string;
  code: string;
  quantity: number;
  amount: number;
  purchaseDate: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ICryptoForm {
  currencyName: string;
  code: string;
  amount: number;
  quantity: number;
  purchaseDate: string;
  position: {
    x: number;
    y: number;
  };
}
