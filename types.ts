export interface Product {
  id: string;
  name: string;
  nameJP: string;
  description: string;
  price: string;
  image: string;
  popular: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google Maps' | 'Direct';
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  mapLink: string;
  phone: string;
  image: string;
  businessHours: string;
}