export const filterByName = (
  nameToFilter: string,
  products: Product[],
): Product[] => {
  const regex = new RegExp(nameToFilter, 'i');

  const filteredProducts = products.filter(({ name }) => {
    return regex.test(name);
  });

  return filteredProducts;
};
