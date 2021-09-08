import React from 'react';

import {
  AddressCard,
  TextInput,
  ButtonMain,
  CheckBox,
  FormWrapper,
} from '../../../components';

import {
  ADDRESS_EDITING_STATUS_MESSAGE,
  ADDRESS_EDITING_STATUS_MESSAGE_BUTTON,
  USER_AREA,
} from '../../../utils';

import {
  AddressCardsWrapper,
  AddressesWrapper,
  DeleteWrapper,
  FormHeader,
  IoMdClose,
  NewAddressFormWrapper,
  NewAddressInternFormWrapper,
  NewAddressTitle,
} from './styles';

type Props = {
  showForm?: 'none' | 'opened' | 'closed';
  user?: UserData;
  formEditingState: AddressEditingStatus;
  handleShowForm: () => void;
  addressFormValues: CreateUserAddress;
  formErrors: Omit<CreateUserAddress, 'defaultAddress'>;
  genericAddressFormChange: (
    target: EventTarget & HTMLInputElement,
    key: string,
  ) => void;
  handleZipCodeChange: (target: EventTarget & HTMLInputElement) => void;
  isValidZipCode: boolean;
  onCheckboxClick: () => void;
  ADDRESS_EDITING_STATUS_FUNCTION: {
    CREATE: () => Promise<void>;
    UPDATE: () => Promise<void>;
  };
  onNewPress: () => void;
  onEditPress: (address: UserAddress) => void;
  handleDeleteAddress: (addressId: string) => Promise<void>;
  onDefineDefaultPress: (
    address: UserAddress,
    addressId: string,
  ) => Promise<void>;
};

const AddressesComponent: React.FC<Props> = ({
  showForm,
  user,
  formEditingState,
  handleShowForm,
  formErrors,
  addressFormValues,
  genericAddressFormChange,
  handleZipCodeChange,
  isValidZipCode,
  onCheckboxClick,
  ADDRESS_EDITING_STATUS_FUNCTION,
  onNewPress,
  onEditPress,
  handleDeleteAddress,
  onDefineDefaultPress,
}) => (
  <AddressesWrapper id={USER_AREA.ADDRESSES_WRAPPER}>
    <NewAddressFormWrapper openState={showForm}>
      <FormWrapper>
        <FormHeader>
          <NewAddressTitle>
            {ADDRESS_EDITING_STATUS_MESSAGE[formEditingState] ||
              'Novo endereço'}
          </NewAddressTitle>
          <DeleteWrapper>
            <IoMdClose size={30} onClick={handleShowForm} />
          </DeleteWrapper>
        </FormHeader>
        <NewAddressInternFormWrapper>
          <TextInput
            label="Nome do endereço"
            inputProps={{
              placeholder: 'Casa da vó',
              value: addressFormValues.name,
              onChange: ({ target }) =>
                genericAddressFormChange(target, 'name'),
            }}
            error={formErrors.name}
            fullWidth
          />
          <TextInput
            label="CEP"
            inputProps={{
              placeholder: '123456-000',
              inputMode: 'numeric',
              value: addressFormValues.cep,
              maxLength: 9,
              onChange: ({ target }) => handleZipCodeChange(target),
            }}
            error={formErrors.cep}
            fullWidth
          />
          <TextInput
            label="Rua"
            inputProps={{
              placeholder: 'Alfredo Neves',
              value: addressFormValues.street,
              onChange: ({ target }) =>
                genericAddressFormChange(target, 'street'),
            }}
            error={formErrors.street}
            fullWidth
          />
          <TextInput
            label="Número"
            inputProps={{
              placeholder: '1234',
              inputMode: 'text',
              maxLength: 20,
              value: addressFormValues.number,
              onChange: ({ target }) =>
                genericAddressFormChange(target, 'number'),
            }}
            error={formErrors.number}
            fullWidth
          />
          <TextInput
            label="Bairro"
            inputProps={{
              placeholder: 'Jardim das Palmeiras',
              value: addressFormValues.district,
              maxLength: 80,
              onChange: ({ target }) =>
                genericAddressFormChange(target, 'district'),
            }}
            error={formErrors.district}
            fullWidth
          />
          <TextInput
            impossibleToEdit={isValidZipCode}
            label="Estado"
            inputProps={{
              placeholder: 'RS',
              contentEditable: false,
              value: addressFormValues.uf,
              onChange: ({ target }) => genericAddressFormChange(target, 'uf'),
            }}
            error={formErrors.uf}
            fullWidth
          />
          <TextInput
            impossibleToEdit={isValidZipCode}
            label="Cidade"
            inputProps={{
              placeholder: 'Alegrete',
              value: addressFormValues.city,
              onChange: ({ target }) =>
                genericAddressFormChange(target, 'city'),
            }}
            error={formErrors.city}
            fullWidth
          />
          <CheckBox
            label="Endereço padrão?"
            checkBoxProps={{
              checked: addressFormValues.defaultAddress,
              onClick: onCheckboxClick,
            }}
          />
        </NewAddressInternFormWrapper>
        <ButtonMain onClick={ADDRESS_EDITING_STATUS_FUNCTION[formEditingState]}>
          {ADDRESS_EDITING_STATUS_MESSAGE_BUTTON[formEditingState]}
        </ButtonMain>
      </FormWrapper>
    </NewAddressFormWrapper>
    <AddressCardsWrapper>
      <AddressCard key={0} isNew onNewPress={onNewPress} />
      {user?.adresses.map(address => (
        <AddressCard
          address={address}
          key={address.id || 0}
          onEditPress={onEditPress}
          onDeletePress={() => handleDeleteAddress(address.id)}
          onDefineDefaultPress={() => onDefineDefaultPress(address, address.id)}
        />
      ))}
    </AddressCardsWrapper>
  </AddressesWrapper>
);

export default AddressesComponent;
