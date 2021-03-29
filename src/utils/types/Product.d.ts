declare type ProductImage = {
  id: string;
  image: string;
};

declare type Product = {
  id: string;
  name: string;
  price: number;
  trending: boolean;
  collection: {
    id: string;
    name: string;
  };
  images: ProductImage[];
  ean?: string;
  description?: string;
  pricePromotional?: string;
  details?: string;
  quantity?: number;
};
