export interface IMutualFund {
  _id: string;
  name: string;
  code: string;
  category: string;
  units: number;
  purchasePrice: number;
  purchaseDate: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IMutualFundForm {
  name: string;
  code: string;
  category: string;
  units: number;
  purchasePrice: number;
  purchaseDate: string;
  position: {
    x: number;
    y: number;
  };
}
