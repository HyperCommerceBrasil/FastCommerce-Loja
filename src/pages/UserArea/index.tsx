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
import { initialFormErrors, initialFormValues } from './form';
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

const UserArea: React.FC = () => {
  const { user, fetchZipCode, createNewAddress } = useContext(
    GlobalUserContext,
  );
  const [showForm, setShowForm] = useState<'opened' | 'closed'>('closed');
  const [formValues, setFormValues] = useState<CreateUserAddress>(
    initialFormValues,
  );
  const [formErrors, setFormErrors] = useState(initialFormErrors);

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
      const { bairro, logradouro, localidade, uf, erro } = await fetchZipCode(
        zipCode,
      );

      if (erro) {
        setFormErrors(oldFormErrors => ({
          ...oldFormErrors,
          cep: 'CEP inválido!',
        }));
        return;
      }

      setFormErrors(oldFormErrors => ({
        ...oldFormErrors,
        cep: '',
      }));

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
    if (treatedCep.length <= 9)
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
              error={formErrors.name}
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
              error={formErrors.cep}
              fullWidth
            />
            <TextInput
              label="Rua"
              inputProps={{
                placeholder: 'Alfredo Neves',
                value: formValues.street,
                onChange: ({ target }) => genericFormChange(target, 'street'),
              }}
              error={formErrors.street}
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
              error={formErrors.number}
              fullWidth
            />
            <TextInput
              label="Bairro"
              inputProps={{
                placeholder: 'Jardim das Palmeiras',
                value: formValues.district,
                onChange: ({ target }) => genericFormChange(target, 'district'),
              }}
              error={formErrors.district}
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
              error={formErrors.uf}
              fullWidth
            />
            <TextInput
              label="Cidade"
              inputProps={{
                placeholder: 'Alegrete',
                value: formValues.city,
                onChange: ({ target }) => genericFormChange(target, 'city'),
              }}
              error={formErrors.city}
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
