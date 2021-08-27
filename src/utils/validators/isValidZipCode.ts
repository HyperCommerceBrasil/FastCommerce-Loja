const isValidZipCode = (zipCode: string): boolean => {
  return /^([0-9]){8}$/.test(zipCode);
};

export default isValidZipCode;
