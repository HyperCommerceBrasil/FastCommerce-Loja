export const productOnCartExistsOnArray = (
  product: ProductOnCart,
  products: ProductOnCart[],
): boolean => {
  let i = 0;

  while (i < products.length) {
    if (products[i].id === product.id) return true;
    i += 1;
  }
  return false;
};
