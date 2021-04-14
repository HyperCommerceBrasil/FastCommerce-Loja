export const filterByCollection = (
  collectionToFilter: string,
  products?: Product[],
): Product[] => {
  if (products) {
    const filteredProducts = products.filter(({ collection }) => {
      return collection.name === collectionToFilter;
    });

    return filteredProducts;
  }
  return [];
};
