export const filterByCollection = (
  collectionToFilter: string,
  products: Product[],
): Product[] => {
  const filteredProducts = products.filter(({ collection }) => {
    return collection.name === collectionToFilter;
  });

  return filteredProducts;
};
