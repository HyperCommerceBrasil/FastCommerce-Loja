const isValidSearch = (search: string): boolean => {
  return /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(search);
};

export default isValidSearch;
