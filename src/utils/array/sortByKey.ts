/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Use it to sort any type of array by given key.
 * @param key
 * @param array
 * @returns
 */
export const sortByKey = <T>(key: string, array: any[]): T[] => {
  const sortedArray = array.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
  return sortedArray;
};
