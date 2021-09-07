import info from '../info';
import success from '../success';

export const userDataBeingUpdated = (): void => {
  info(`Atualizando cadastro...`);
};

export const userDataUpdated = (): void => {
  success(`Cadastro atualizado!`);
};
