export interface IRealEstate {
  _id: string;
  location: string;
  price: number;
  image: string;
  salePrice: number;
  position: {
    x: number;
    y: number;
  };
}

export interface IRealEstateForm {
  location: string;
  price: number;
  position: {
    x: number;
    y: number;
  };
  image?: string;
  salePrice?: number;
}
