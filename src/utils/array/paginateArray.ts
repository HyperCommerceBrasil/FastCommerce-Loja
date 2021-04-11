export const paginateArray = <T>(
  maxItemsOnPage: number,
  arrayToBePaginated: T[],
): T[][] => {
  const totalItems = arrayToBePaginated.length;
  let page = [];
  const paginatedArray = [];

  let i;
  for (i = 0; i < totalItems; i += 1) {
    page.push(arrayToBePaginated[i]);

    if (page.length === maxItemsOnPage) {
      paginatedArray.push(page);
      page = [];
    }
  }

  if (page.length !== 0) paginatedArray.push(page);

  return paginatedArray;
};
