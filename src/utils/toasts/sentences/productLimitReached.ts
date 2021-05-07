import warning from '../warning';

export const warningProductLimitReachedAmountOrdered = (
  productLimitValue: number,
): void => {
  warning(`Calma aí! Só temos ${productLimitValue} unidades disponíveis! 😬`);
};
