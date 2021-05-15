import React, { createContext, useState } from 'react';
import {
  productOnCartExistsOnArray,
  success,
  warning,
  warningProductLimitReachedAmountOrdered,
} from '../../utils';

type PushProductProps = {
  amountOrdered?: number;
  product: ProductOnCart;
};

type CartData = {
  products: ProductOnCart[];
  pushProduct(props: PushProductProps): void;
  removeProduct(product: ProductOnCart): void;
  handleSetProducts(products: ProductOnCart[]): void;
  handlePlusProductQuantityOrdered(productId: string): void;
  handleMinusProductQuantityOrdered(productId: string): void;
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

  const handleSetCartIsShowing = () => setCartIsShowing(!cartIsShowing);

  const handleGetTotalPrice = (paramProducts?: ProductOnCart[]) => {
    const functionProducts = paramProducts || products;
    let i = 0;
    let price = 0;

    while (i < functionProducts.length) {
      price += functionProducts[i].price * functionProducts[i].quantityOrdered;
      i += 1;
    }
    return price;
  };

  const handlePlusProductQuantityOrdered = (productId: string) => {
    let i = 0;
    let product;
    const updatedProducts = [];

    while (i < products.length) {
      product = products[i];
      if (products[i].id === productId) {
        if (products[i].quantityOrdered === products[i].quantity) {
          warningProductLimitReachedAmountOrdered(products[i].quantity);
          return;
        }
        product.quantityOrdered += 1;
        updatedProducts.push(product);
      } else {
        updatedProducts.push(product);
      }
      i += 1;
    }

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleMinusProductQuantityOrdered = (productId: string) => {
    let i = 0;
    const LAST_POSSIBLE_VALUE = 1;
    let product;
    const updatedProducts = [];

    while (i < products.length) {
      product = products[i];
      if (products[i].id === productId) {
        if (product.quantityOrdered !== LAST_POSSIBLE_VALUE)
          product.quantityOrdered -= LAST_POSSIBLE_VALUE;
        updatedProducts.push(product);
      } else {
        updatedProducts.push(product);
      }

      i += 1;
    }

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setProducts(updatedProducts);
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

  return (
    <GlobalCartContext.Provider
      value={{
        products,
        pushProduct,
        removeProduct,
        handlePlusProductQuantityOrdered,
        handleMinusProductQuantityOrdered,
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
