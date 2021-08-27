import React, { useState, useContext } from 'react';

import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  Drawer,
  Cart,
  CartOrderCard,
  AddressCard,
  TextInput,
  ButtonMain,
} from '../../components';
import { GlobalUserContext } from '../../contexts';
import { addressCreated, error, ZipCodeMask } from '../../utils';
import { DRAWER_VALUES } from '../../utils/enums';
import {
  AddressCardsWrapper,
  AddressesWrapper,
  DeleteWrapper,
  DrawerSelectedWrapper,
  DrawerWrapper,
  FormHeader,
  InternWrapper,
  IoMdClose,
  NewAddressFormWrapper,
  NewAddressInternFormWrapper,
  NewAddressOutsideFormWrapper,
  NewAddressTitle,
  Wrapper,
} from './styles';

const addresses = [
  {
    id: 'a69a9771-37a9-4ce9-9805-73561cb0f8df',
    name: 'Minha Casa 1',
    customerId: 'e1aabe93-8586-4151-8119-0a793e81d7a2',
    cep: '978000000',
    uf: 'RS',
    city: 'São  Luiz Gonzaga',
    street: 'Rua Ernestp Alves',
    district: 'Monsenhor Wolski',
    number: '1431',
    addressDefault: false,
    created_at: '2021-07-25T18:57:05.630Z',
    updated_at: '2021-07-25T21:38:23.155Z',
  },
  {
    id: 'dacaa187-dce5-4376-b9d0-f602de81b2a6',
    name: 'Minha Casa 1',
    customerId: 'e1aabe93-8586-4151-8119-0a793e81d7a2',
    cep: '978000000',
    uf: 'RS',
    city: 'São  Luiz Gonzaga',
    street: 'Rua Ernestp Alves',
    district: 'Monsenhor Wolski',
    number: '1431',
    addressDefault: true,
    created_at: '2021-07-25T18:57:03.757Z',
    updated_at: '2021-07-25T21:38:23.160Z',
  },
  {
    id: '0f7007c8-a1b3-4757-9183-6172bceb9d59',
    name: 'Minha Casa',
    customerId: 'e1aabe93-8586-4151-8119-0a793e81d7a2',
    cep: '978000000',
    uf: 'RS',
    city: 'São  Luiz Gonzaga',
    street: 'Rua Ernesto Alves',
    district: 'Monsenhor Wolski',
    number: '1431',
    addressDefault: false,
    created_at: '2021-07-25T18:57:04.806Z',
    updated_at: '2021-07-25T21:38:48.399Z',
  },
];

const initialFormValues: CreateUserAddress = {
  cep: '',
  city: '',
  defaultAddress: true,
  district: '',
  number: '',
  name: '',
  street: '',
  uf: '',
};

const UserArea: React.FC = () => {
  const { user, fetchZipCode, createNewAddress } = useContext(
    GlobalUserContext,
  );
  const [showForm, setShowForm] = useState<'opened' | 'closed'>('closed');
  const [formValues, setFormValues] = useState<CreateUserAddress>(
    initialFormValues,
  );

  const [activeState, setActiveState] = useState<DrawerOptions>(
    'ACCOUNT_INFORMATION',
  );

  const handleCreateNewAddress = async () => {
    try {
      await createNewAddress(formValues);

      addressCreated(formValues.name);

      setFormValues(initialFormValues);
    } catch (err) {
      error(err.message);
    }
  };

  const handleShowForm = () =>
    showForm === 'closed' ? setShowForm('opened') : setShowForm('closed');

  const fetchZipCodeLocal = async (zipCode: string) => {
    try {
      const { bairro, logradouro, localidade, uf } = await fetchZipCode(
        zipCode,
      );

      setFormValues(oldFormValues => ({
        ...oldFormValues,
        district: bairro,
        city: localidade,
        street: logradouro,
        uf,
      }));
    } catch (err) {
      error(err.message);
    }
  };

  const handleZipCodeChange = (target: EventTarget & HTMLInputElement) => {
    const treatedCep = ZipCodeMask(target.value);
    if (treatedCep.length === 9) fetchZipCodeLocal(treatedCep);
    setFormValues(oldFormValues => ({ ...oldFormValues, cep: treatedCep }));
  };

  const genericFormChange = (
    target: EventTarget & HTMLInputElement,
    key: string,
  ) => {
    setFormValues(oldFormValues => ({ ...oldFormValues, [key]: target.value }));
  };

  const addressesComponent = () => (
    <AddressesWrapper>
      <NewAddressFormWrapper openState={showForm}>
        <NewAddressOutsideFormWrapper>
          <FormHeader>
            <NewAddressTitle>Novo endereço</NewAddressTitle>
            <DeleteWrapper>
              <IoMdClose size={30} onClick={handleShowForm} />
            </DeleteWrapper>
          </FormHeader>
          <NewAddressInternFormWrapper>
            <TextInput
              label="Nome do endereço"
              inputProps={{
                placeholder: 'Casa da vó',
                value: formValues.name,
                onChange: ({ target }) => genericFormChange(target, 'name'),
              }}
              fullWidth
            />
            <TextInput
              label="CEP"
              inputProps={{
                placeholder: '123456-000',
                inputMode: 'numeric',
                value: formValues.cep,
                maxLength: 9,
                onChange: ({ target }) => handleZipCodeChange(target),
              }}
              fullWidth
            />
            <TextInput
              label="Rua"
              inputProps={{
                placeholder: 'Alfredo Neves',
                value: formValues.street,
                onChange: ({ target }) => genericFormChange(target, 'street'),
              }}
              fullWidth
            />
            <TextInput
              label="Número"
              inputProps={{
                placeholder: '1234',
                inputMode: 'numeric',
                maxLength: 9,
                value: formValues.number,
                onChange: ({ target }) => genericFormChange(target, 'number'),
              }}
              fullWidth
            />
            <TextInput
              label="Bairro"
              inputProps={{
                placeholder: 'Jardim das Palmeiras',
                value: formValues.district,
                onChange: ({ target }) => genericFormChange(target, 'district'),
              }}
              fullWidth
            />
            <TextInput
              label="Estado"
              inputProps={{
                placeholder: 'RS',
                contentEditable: false,
                value: formValues.uf,
                onChange: ({ target }) => genericFormChange(target, 'uf'),
              }}
              fullWidth
            />
            <TextInput
              label="Cidade"
              inputProps={{
                placeholder: 'Alegrete',
                value: formValues.city,
                onChange: ({ target }) => genericFormChange(target, 'city'),
              }}
              fullWidth
            />
          </NewAddressInternFormWrapper>
          <ButtonMain onClick={handleCreateNewAddress}>Criar</ButtonMain>
        </NewAddressOutsideFormWrapper>
      </NewAddressFormWrapper>
      <AddressCardsWrapper>
        <AddressCard key={0} isNew onNewPress={handleShowForm} />
        {user?.adresses.map(address => (
          <AddressCard address={address} key={address.id || 0} />
        ))}
      </AddressCardsWrapper>
    </AddressesWrapper>
  );

  /**
   * This is defined to maintain functions for the selected option in drawer to render
   */
  const SelectedDrawerRenderFunctions = {
    [DRAWER_VALUES.ACCOUNT_INFORMATION]: () => (
      <CartOrderCard text={DRAWER_VALUES.ACCOUNT_INFORMATION} />
    ),
    [DRAWER_VALUES.ADRESSES]: addressesComponent,
    [DRAWER_VALUES.ORDERS]: () => <CartOrderCard text={DRAWER_VALUES.ORDERS} />,
  };

  const renderActiveDrawerSelection =
    SelectedDrawerRenderFunctions[activeState];

  return (
    <Wrapper>
      <Header />
      <Categories />
      <Cart />
      <ContentWrapper>
        <InternWrapper>
          <DrawerWrapper>
            <Drawer onChangeActiveState={setActiveState} />
          </DrawerWrapper>
          <DrawerSelectedWrapper>
            {renderActiveDrawerSelection()}
          </DrawerSelectedWrapper>
        </InternWrapper>
      </ContentWrapper>
      <Footer shouldHaveBottomPadding={100} />
    </Wrapper>
  );
};

export default UserArea;
