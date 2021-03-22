declare type Product = {
  id: string;
  name: string;
  price: number;
  trending: boolean;
  collection: {
    id: string;
    name: string;
  };
  images: string[];
  quantity: number;
};
