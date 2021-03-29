export const toLocalCurrency = (value: number): string =>
  value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
