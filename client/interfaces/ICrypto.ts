export interface ICrypto {
  _id: string;
  name: string;
  amount: number;
  quantity: number;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ICryptoForm {
  amount: number;
  name: string;
  quantity: number;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
