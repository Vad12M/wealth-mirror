export interface ISaving {
  _id: string;
  name: string;
  type: string;
  frequency: string;
  amount: number;
  lastUpdated: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ISavingForm {
  type: string;
  name: string;
  frequency: string;
  amount: number;
  lastUpdated: string;
  position: {
    x: number;
    y: number;
  };
}
