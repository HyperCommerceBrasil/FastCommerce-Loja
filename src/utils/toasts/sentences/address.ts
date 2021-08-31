import info from '../info';
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

export const addressBeingCreatedSentence = (): void => {
  info(`Criando o endereço...`);
};

export const addressBeingDeletedSentence = (): void => {
  info(`Excluindo o endereço...`);
};

export const addressBeingUpdatedSentence = (): void => {
  info(`Atualizando o endereço...`);
};

export const addressBeingDefaultDefinedSentence = (): void => {
  info(`Padronizando o endereço...`);
};
