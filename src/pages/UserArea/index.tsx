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
  FormWrapper,
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
  addressBeingUpdatedSentence,
  addressBeingDefaultDefinedSentence,
  addressBeingDeletedSentence,
  addressBeingCreatedSentence,
  userDataBeingUpdated,
  userDataUpdated,
  isValidEmail,
  getBackFormattedDate,
} from '../../utils';
import {
  initialAddressFormErrors,
  initialAddressFormValues,
  initialUserInfoFormErrors,
} from './form';
import {
  AccountInformationSubtitle,
  AccountInformationWrapper,
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
    updateNewUserData,
  } = useContext(GlobalUserContext);
  const { scrollToDiv } = useScrollTo();
  const [showForm, setShowForm] = useState<'opened' | 'closed'>('closed');
  const [isValidZipCode, setIsValidZipCode] = useState(false);
  const [
    formEditingState,
    setFormEditingState,
  ] = useState<AddressEditingStatus>('CREATE');
  const [addressFormValues, setAddressFormValues] = useState<CreateUserAddress>(
    initialAddressFormValues,
  );
  const [userInfoFormValues, setUserInfoFormValues] = useState<UserData>({
    adresses: user?.adresses || [],
    birthdate: getBackFormattedDate(user?.birthdate) || '',
    cpf: user?.cpf || '',
    email: user?.email || '',
    name: user?.name || '',
    id: user?.id || '',
    password: '',
  });
  const [addresIDToEdit, setAddresIDToEdit] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [formErrors, setFormErrors] = useState(initialAddressFormErrors);
  const [userInfoFormErrors, setUserInfoFormErrors] = useState(
    initialUserInfoFormErrors,
  );

  const [activeState, setActiveState] = useState<DrawerOptions>(
    'ACCOUNT_INFORMATION',
  );

  const onCheckboxClick = () => {
    setAddressFormValues(oldFormValues => ({
      ...oldFormValues,
      defaultAddress: !oldFormValues.defaultAddress,
    }));
  };

  const handleCreateNewAddress = async () => {
    addressBeingCreatedSentence();
    try {
      await createNewAddress(addressFormValues);

      addressCreatedSentence(addressFormValues.name);

      setAddressFormValues(initialAddressFormValues);

      await fetchUserData();

      setShowForm('closed');
    } catch (err) {
      error(err.message);
    }
  };

  const handleUpdateAddress = async (addressId: string) => {
    addressBeingUpdatedSentence();
    try {
      await updateAddress(addressFormValues, addressId);

      addressUpdatedSentence(addressFormValues.name);

      setAddressFormValues(initialAddressFormValues);

      await fetchUserData();

      setShowForm('closed');
    } catch (err) {
      error(err.message);
    }
  };

  const handleDeleteAddress = async (addressId: string): Promise<void> => {
    addressBeingDeletedSentence();
    try {
      await deleteAddress(addressId);

      addressDeletedSentence(addressFormValues.name);

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

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    setConfirmPasswordError('');
    setConfirmPassword(confirmPassword);
  };

  const isValidUserInfoFormValues = (): boolean => {
    if (userInfoFormValues.password !== confirmPassword) {
      setConfirmPasswordError('As senhas estão diferentes!');
      return false;
    }

    if (userInfoFormValues.password === '') {
      setUserInfoFormErrors(oldUserInfoFormErrors => ({
        ...oldUserInfoFormErrors,
        password: 'Senha inválida!',
      }));
      return false;
    }

    if (!isValidEmail(userInfoFormValues.email)) {
      setUserInfoFormErrors(oldUserInfoFormErrors => ({
        ...oldUserInfoFormErrors,
        email: 'Email inválido!',
      }));
      return false;
    }

    if (userInfoFormValues.name === '') {
      setUserInfoFormErrors(oldUserInfoFormErrors => ({
        ...oldUserInfoFormErrors,
        name: 'Nome inválido!',
      }));
      return false;
    }

    return true;
  };

  const handleUpdateUserData = async () => {
    if (!isValidUserInfoFormValues()) return;

    userDataBeingUpdated();
    try {
      await updateNewUserData(userInfoFormValues);

      userDataUpdated();

      await fetchUserData();
    } catch (err) {
      error(err.message);
    }
  };

  const onNewPress = () => {
    scrollToDiv(USER_AREA.ADDRESSES_WRAPPER, { behavior: 'smooth' });
    setAddressFormValues(initialAddressFormValues);
    setFormErrors(initialAddressFormErrors);

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

    setAddressFormValues({
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
    addressBeingDefaultDefinedSentence();
    try {
      await updateAddress({ ...address, defaultAddress: true }, addressId);

      addressUpdatedSentence(addressFormValues.name);

      setAddressFormValues(initialAddressFormValues);

      await fetchUserData();

      setShowForm('closed');
    } catch (err) {
      error(err.message);
    }
  };

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
        setIsValidZipCode(false);
        return;
      }

      setIsValidZipCode(true);

      setFormErrors(oldFormErrors => ({
        ...oldFormErrors,
        cep: '',
      }));

      setAddressFormValues(oldFormValues => ({
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
      setAddressFormValues(oldFormValues => ({
        ...oldFormValues,
        cep: treatedCep,
      }));
  };

  const genericAddressFormChange = (
    target: EventTarget & HTMLInputElement,
    key: string,
  ) => {
    setAddressFormValues(oldFormValues => ({
      ...oldFormValues,
      [key]: target.value,
    }));
  };

  const genericUserInfoFormChange = (
    target: EventTarget & HTMLInputElement,
    key: string,
  ) => {
    if (key === 'email')
      setUserInfoFormErrors(oldUserInfoFormErrors => ({
        ...oldUserInfoFormErrors,
        email: '',
      }));

    if (key === 'name')
      setUserInfoFormErrors(oldUserInfoFormErrors => ({
        ...oldUserInfoFormErrors,
        name: '',
      }));

    if (key === 'password')
      setUserInfoFormErrors(oldUserInfoFormErrors => ({
        ...oldUserInfoFormErrors,
        password: '',
      }));

    setUserInfoFormValues(oldFormValues => ({
      ...oldFormValues,
      [key]: target.value,
    }));
  };

  const addressesComponent = () => (
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
                onChange: ({ target }) =>
                  genericAddressFormChange(target, 'uf'),
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
          <ButtonMain
            onClick={ADDRESS_EDITING_STATUS_FUNCTION[formEditingState]}
          >
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
            onDefineDefaultPress={() =>
              onDefineDefaultPress(address, address.id)
            }
          />
        ))}
      </AddressCardsWrapper>
    </AddressesWrapper>
  );

  const accountInformationComponent = () => (
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
            onChange: ({ target }) =>
              genericUserInfoFormChange(target, 'email'),
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

  /**
   * This is defined to maintain functions for the selected option in drawer to render
   */
  const SelectedDrawerRenderFunctions = {
    [DRAWER_VALUES.ACCOUNT_INFORMATION]: accountInformationComponent,
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
