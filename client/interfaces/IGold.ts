export interface IGold {
  _id: string;
  quantity: number;
  amount: number;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IGoldForm {
  quantity: number;
  amount: number;
  position: {
    x: number;
    y: number;
  };
  image?: string;
}
