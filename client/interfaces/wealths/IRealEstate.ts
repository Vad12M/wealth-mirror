export interface IRealEstate {
  _id: string;
  category: string;
  type: string;
  location: string;
  price: number;
  salePrice: number;
  position: {
    x: number;
    y: number;
  };
  purchaseDate: string;
}

export interface IRealEstateForm {
  category: string;
  type: string
  location: string;
  price: number;
  position: {
    x: number;
    y: number;
  };
  salePrice?: number;
  purchaseDate?: string;
}
