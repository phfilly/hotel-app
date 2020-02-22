export interface Hotels {
  name: string;
  image: string;
  location: string;
  city: string;
  country: string;
  distanceFromCenter: number;
  pricing: Price;
  vendors: Vendors[];
  perks: string[];
  reviewCount: number;
  starRating: number;
  rating: number;
  isSpecial: boolean;
  canCancel: boolean;
  id: string;
}

export interface Price {
  minRate: number;
  price: number;
  specialPrice: number;
}

export interface Vendors {
  vendor: string;
  price: number;
  link: string;
}
