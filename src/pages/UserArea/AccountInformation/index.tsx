import React from 'react';

import { TextInput, ButtonMain, FormWrapper } from '../../../components';

import {
  AccountInformationSubtitle,
  AccountInformationWrapper,
} from './styles';

type Props = {
  userInfoFormValues: UserData;
  userInfoFormErrors: UserData;
  genericUserInfoFormChange: (
    target: EventTarget & HTMLInputElement,
    key: string,
  ) => void;
  confirmPassword: string;
  handleConfirmPasswordChange: (confirmPassword: string) => void;
  confirmPasswordError?: string;
  handleUpdateUserData: () => Promise<void>;
};

const AccountInformationComponent: React.FC<Props> = ({
  userInfoFormValues,
  userInfoFormErrors,
  genericUserInfoFormChange,
  confirmPassword,
  handleConfirmPasswordChange,
  confirmPasswordError,
  handleUpdateUserData,
}) => (
  <AccountInformationWrapper>
    <FormWrapper>
      <AccountInformationSubtitle>Cadastro</AccountInformationSubtitle>
      <TextInput
        label="Nome"
        inputProps={{
          type: 'name',
          placeholder: 'Ricardo Freitas',
          value: userInfoFormValues.name,
          onChange: ({ target }) => genericUserInfoFormChange(target, 'name'),
        }}
        error={userInfoFormErrors.name}
        fullWidth
      />
      <TextInput
        label="Email"
        inputProps={{
          placeholder: 'ricardofreitas@mail.com.br',
          value: userInfoFormValues.email,
          onChange: ({ target }) => genericUserInfoFormChange(target, 'email'),
        }}
        error={userInfoFormErrors.email}
        fullWidth
      />
      <TextInput
        label="Data de nascimento"
        inputProps={{
          placeholder: '25/02/2000',
          type: 'date',
          value: userInfoFormValues.birthdate,
          onChange: ({ target }) =>
            genericUserInfoFormChange(target, 'birthdate'),
        }}
        error={userInfoFormErrors.birthdate}
        fullWidth
      />
      <TextInput
        label="Nova Senha"
        inputProps={{
          type: 'password',
          placeholder: '94836862299',
          value: userInfoFormValues.password,
          onChange: ({ target }) =>
            genericUserInfoFormChange(target, 'password'),
        }}
        error={userInfoFormErrors.password}
        fullWidth
      />
      <TextInput
        label="Confirmar nova senha"
        inputProps={{
          type: 'password',
          placeholder: '94836862299',
          value: confirmPassword,
          onChange: ({ target }) => handleConfirmPasswordChange(target.value),
        }}
        error={confirmPasswordError}
        fullWidth
      />
      <ButtonMain onClick={handleUpdateUserData}>Atualizar dados</ButtonMain>
    </FormWrapper>
  </AccountInformationWrapper>
);

export default AccountInformationComponent;
