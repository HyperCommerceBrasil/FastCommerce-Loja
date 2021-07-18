import success from '../success';

export const welcomeBack = (userName: string): void => {
  success(`Bem vindo de volta ${userName}!`);
};

export const welcomeToFastCommerce = (userName: string): void => {
  success(
    `Conta criada ${userName}! Esperamos que sua experiência na FastCommerce seja muito positiva!`,
  );
};
