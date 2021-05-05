import React, { createContext, useState } from 'react';
import { productOnCartExistsOnArray, success, warning } from '../../utils';

type PushProductProps = {
  amountOrdered?: number;
  product: ProductOnCart;
};

type CartData = {
  products: ProductOnCart[];
  pushProduct(props: PushProductProps): void;
  removeProduct(product: ProductOnCart): void;
  handleSetProducts(products: ProductOnCart[]): void;
  handleAddProductQuantityOrdered(): void;
  isCartShowing: boolean;
  setIsCartShowing(): void;
  totalProductsOnCart: number;
  totalPrice: number;
};

export const GlobalCartContext = createContext<CartData>({} as CartData);

export const GlobalCartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductOnCart[]>([]);
  const [totalProductsOnCart, setTotalProductsOnCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartIsShowing, setCartIsShowing] = useState(false);

  const handleGetTotalPrice = (products: ProductOnCart[]) => {
    let i = 0;
    let price = 0;

    while (i < products.length) {
      price += products[i].price;
      i += 1;
    }
    return price;
  };

  const pushProduct = ({ amountOrdered, product }: PushProductProps): void => {
    if (productOnCartExistsOnArray(product, products)) {
      warning(
        'Já existe esse produto no carrinho! Caso quiser mais unidades dele, só adicionar por lá. 😉',
      );
      return;
    }

    const amountOrderedProduct = product;
    amountOrderedProduct.quantityOrdered = amountOrdered || 1;

    const updatedProducts = products;
    updatedProducts.push(amountOrderedProduct);

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setTotalProductsOnCart(updatedProducts.length);
    setProducts(updatedProducts);
    success(`${product.name} adicionado ao carrinho! 🛒`);
  };

  const removeProduct = (product: ProductOnCart): void => {
    const updatedProducts = [];
    let i = 0;

    while (i < products.length) {
      if (products[i].id !== product.id) updatedProducts.push(products[i]);
      i += 1;
    }

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setTotalProductsOnCart(updatedProducts.length);
    setProducts(updatedProducts);
  };

  const handleSetProducts = (products: ProductOnCart[]) => {
    setTotalPrice(handleGetTotalPrice(products));
    setTotalProductsOnCart(products.length);
    setProducts(products);
  };

  const handleAddProductQuantityOrdered = () => {
    const updatedProducts = products.map(product => {
      const raisedProduct = product;
      if (raisedProduct.quantityOrdered) raisedProduct.quantityOrdered += 1;
      return raisedProduct;
    });
    setProducts(updatedProducts);
  };

  // const handleAddAmount = () => {};

  const handleSetCartIsShowing = () => setCartIsShowing(!cartIsShowing);

  return (
    <GlobalCartContext.Provider
      value={{
        products,
        pushProduct,
        removeProduct,
        handleAddProductQuantityOrdered,
        handleSetProducts,
        isCartShowing: cartIsShowing,
        setIsCartShowing: handleSetCartIsShowing,
        totalPrice,
        totalProductsOnCart,
      }}
    >
      {children}
    </GlobalCartContext.Provider>
  );
};
