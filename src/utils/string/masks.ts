export const ZipCodeMask = (text: string): string =>
  text.replace(/^(\d{5})(\d{3}).*/, '$1-$2');
