import success from '../success';

export const addressCreated = (addressName: string): void => {
  success(`O endereço ${addressName}, foi criado!`);
};
