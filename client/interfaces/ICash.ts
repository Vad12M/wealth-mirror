export interface ICash{
  _id: string;
  amount: number;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ICashForm {
  amount: number;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
