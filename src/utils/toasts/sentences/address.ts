import success from '../success';

export const addressCreatedSentence = (addressName: string): void => {
  success(`O endereço ${addressName}, foi criado!`);
};

export const addressUpdatedSentence = (addressName: string): void => {
  success(`O endereço ${addressName}, foi atualizado!`);
};

export const addressDeletedSentence = (addressName: string): void => {
  success(`O endereço ${addressName}, foi excluído!`);
};
