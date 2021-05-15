import React, { createContext, useEffect, useState } from 'react';
import {
  productOnCartExistsOnArray,
  success,
  warning,
  warningProductLimitReachedAmountOrdered,
} from '../../utils';
import { STORAGE_KEYS } from '../../utils/enums';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

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
  const { saveValue, fetchValue } = useLocalStorage();

  const [products, setProducts] = useState<ProductOnCart[]>(
    (JSON.parse(
      fetchValue(STORAGE_KEYS.CART_PRODUCTS) || '[]',
    ) as ProductOnCart[]) || [],
  );
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
    saveValue<ProductOnCart[]>(STORAGE_KEYS.CART_PRODUCTS, updatedProducts);
  };

  const handleMinusProductQuantityOrdered = (productId: string) => {
    let iterator = 0;
    const LAST_POSSIBLE_VALUE = 1;
    let product;
    const updatedProducts = [];

    while (iterator < products.length) {
      product = products[iterator];
      if (products[iterator].id === productId) {
        if (product.quantityOrdered !== LAST_POSSIBLE_VALUE)
          product.quantityOrdered -= LAST_POSSIBLE_VALUE;
        updatedProducts.push(product);
      } else {
        updatedProducts.push(product);
      }

      iterator += 1;
    }

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setProducts(updatedProducts);
    saveValue<ProductOnCart[]>(STORAGE_KEYS.CART_PRODUCTS, updatedProducts);
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
    saveValue<ProductOnCart[]>(STORAGE_KEYS.CART_PRODUCTS, updatedProducts);
    success(`${product.name} adicionado ao carrinho! 🛒`);
  };

  const removeProduct = (product: ProductOnCart): void => {
    const updatedProducts = [];
    let iterator = 0;

    while (iterator < products.length) {
      if (products[iterator].id !== product.id)
        updatedProducts.push(products[iterator]);
      iterator += 1;
    }

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setTotalProductsOnCart(updatedProducts.length);
    setProducts(updatedProducts);
    saveValue<ProductOnCart[]>(STORAGE_KEYS.CART_PRODUCTS, updatedProducts);
  };

  const handleSetProducts = (products: ProductOnCart[]) => {
    setTotalPrice(handleGetTotalPrice(products));
    setTotalProductsOnCart(products.length);
    setProducts(products);
    saveValue<ProductOnCart[]>(STORAGE_KEYS.CART_PRODUCTS, products);
  };

  useEffect(() => {
    setTotalPrice(handleGetTotalPrice(products));
    setTotalProductsOnCart(products.length);
  }, []);

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
