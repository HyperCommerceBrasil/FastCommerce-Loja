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
  CheckBox,
} from '../../components';
import { GlobalUserContext } from '../../contexts';
import {
  ADDRESS_EDITING_STATUS,
  ADDRESS_EDITING_STATUS_MESSAGE,
  ADDRESS_EDITING_STATUS_MESSAGE_BUTTON,
  DRAWER_VALUES,
  USER_AREA,
  ZipCodeMask,
  addressCreatedSentence,
  addressDeletedSentence,
  addressUpdatedSentence,
  error,
  useScrollTo,
} from '../../utils';
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
  const {
    user,
    fetchZipCode,
    createNewAddress,
    updateAddress,
    deleteAddress,
    fetchUserData,
  } = useContext(GlobalUserContext);
  const { scrollToDiv } = useScrollTo();
  const [showForm, setShowForm] = useState<'opened' | 'closed'>('closed');
  const [
    formEditingState,
    setFormEditingState,
  ] = useState<AddressEditingStatus>('CREATE');
  const [formValues, setFormValues] = useState<CreateUserAddress>(
    initialFormValues,
  );
  const [addresIDToEdit, setAddresIDToEdit] = useState('');
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [activeState, setActiveState] = useState<DrawerOptions>(
    'ACCOUNT_INFORMATION',
  );

  const onCheckboxClick = () => {
    setFormValues(oldFormValues => ({
      ...oldFormValues,
      defaultAddress: !oldFormValues.defaultAddress,
    }));
  };

  const handleCreateNewAddress = async () => {
    try {
      await createNewAddress(formValues);

      addressCreatedSentence(formValues.name);

      setFormValues(initialFormValues);

      await fetchUserData();

      setShowForm('closed');
    } catch (err) {
      error(err.message);
    }
  };

  const handleUpdateAddress = async (addressId: string) => {
    try {
      await updateAddress(formValues, addressId);

      addressUpdatedSentence(formValues.name);

      setFormValues(initialFormValues);

      await fetchUserData();

      setShowForm('closed');
    } catch (err) {
      error(err.message);
    }
  };

  const handleDeleteAddress = async (addressId: string): Promise<void> => {
    try {
      await deleteAddress(addressId);

      addressDeletedSentence(formValues.name);

      await fetchUserData();
    } catch (err) {
      error(err.message);
    }
  };

  const ADDRESS_EDITING_STATUS_FUNCTION = {
    [ADDRESS_EDITING_STATUS.CREATE]: () => handleCreateNewAddress(),
    [ADDRESS_EDITING_STATUS.UPDATE]: () => handleUpdateAddress(addresIDToEdit),
  };

  const handleShowForm = () =>
    showForm === 'closed' ? setShowForm('opened') : setShowForm('closed');

  const onNewPress = () => {
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);

    setFormEditingState('CREATE');

    handleShowForm();
  };

  const onEditPress = (address: UserAddress): void => {
    setAddresIDToEdit(address.id);
    setFormEditingState('UPDATE');
    scrollToDiv(USER_AREA.ADDRESSES_WRAPPER, { behavior: 'smooth' });

    const {
      cep,
      city,
      name,
      district,
      uf,
      number,
      street,
      addressDefault,
    } = address;

    setFormValues({
      cep,
      city,
      uf,
      street,
      district,
      name,
      number,
      defaultAddress: addressDefault,
    });

    handleShowForm();
  };

  const onDefineDefaultPress = async (
    address: UserAddress,
    addressId: string,
  ) => {
    try {
      await updateAddress({ ...address, defaultAddress: true }, addressId);

      addressUpdatedSentence(formValues.name);

      setFormValues(initialFormValues);

      await fetchUserData();

      setShowForm('closed');
    } catch (err) {
      error(err.message);
    }
  };

  // const onDeletePress = () => {};

  // const onDefineDefaultPress = () => {};

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
    <AddressesWrapper id={USER_AREA.ADDRESSES_WRAPPER}>
      <NewAddressFormWrapper openState={showForm}>
        <NewAddressOutsideFormWrapper>
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
            <CheckBox
              label="Endereço padrão?"
              checkBoxProps={{
                checked: formValues.defaultAddress,
                onClick: onCheckboxClick,
              }}
            />
          </NewAddressInternFormWrapper>
          <ButtonMain
            onClick={ADDRESS_EDITING_STATUS_FUNCTION[formEditingState]}
          >
            {ADDRESS_EDITING_STATUS_MESSAGE_BUTTON[formEditingState]}
          </ButtonMain>
        </NewAddressOutsideFormWrapper>
      </NewAddressFormWrapper>
      <AddressCardsWrapper>
        <AddressCard key={0} isNew onNewPress={onNewPress} />
        {user?.adresses.map(address => (
          <AddressCard
            address={address}
            key={address.id || 0}
            onEditPress={onEditPress}
            onDeletePress={() => handleDeleteAddress(address.id)}
            onDefineDefaultPress={() =>
              onDefineDefaultPress(address, address.id)
            }
          />
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
