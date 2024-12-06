export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  stock?: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}
