import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../assets';
import { GlobalCartContext, GlobalUserContext } from '../../contexts';
import { error, isValidSearch, getFirstName, isValidEmail } from '../../utils';
import CartIcon from '../CartIcon';
import { initialFormErrors, initialFormValues } from './form';
import {
  CartWrapper,
  InternUserWrapper,
  LogoWrapper,
  OptionsWrapper,
  SearchButton,
  SearchInput,
  SearchWrapper,
  UserText,
  UserWrapper,
  LoginBox,
  FaUser,
  Wrapper,
  LoginBoxWrapper,
} from './styles';

type HeaderProps = {
  onSearchName?(name: string): void;
};

const Header: React.FC<HeaderProps> = ({ onSearchName }) => {
  const { push } = useHistory();
  const { login, createUser } = useContext(GlobalUserContext);
  const { setIsCartShowing, totalPrice, totalProductsOnCart } = useContext(
    GlobalCartContext,
  );
  const { user } = useContext(GlobalUserContext);
  const [isLoginBoxOpened, setIsLoginBoxOpened] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleSearch = () => {
    if (isValidSearch(searchValue)) {
      push(`/search?name=${searchValue}`);
      if (onSearchName) onSearchName(searchValue);
    } else {
      error('🤔 Não entendi... use só letras, números ou espaços!');
    }
  };

  const genericFormChange = (target: string, key: string) => {
    setFormValues(oldFormValues => ({ ...oldFormValues, [key]: target }));
  };

  const onEmailChange = (email: string) => {
    setFormErrors(oldFormError => ({ ...oldFormError, email: undefined }));
    genericFormChange(email, 'email');
  };

  const handleLogin = async (
    email: string,
    password: string,
  ): Promise<void> => {
    if (!isValidEmail(formValues.email)) {
      setFormErrors({ ...formErrors, email: 'Insira um email válido!' });
      return;
    }

    try {
      await login({ email, password });

      setIsLoginBoxOpened(false);
      setFormValues(initialFormValues);
    } catch (err) {
      error(err.message);
    }
  };

  const handleCreateAccount = async (
    name: string,
    email: string,
    password: string,
  ) => {
    if (!isValidEmail(formValues.email)) {
      setFormErrors({ ...formErrors, email: 'Insira um email válido!' });
      return;
    }

    try {
      await createUser({ email, name, password }, true);

      setIsLoginBoxOpened(false);
      setFormValues(initialFormValues);
    } catch (err) {
      error(err.message);
    }
  };

  const handleEnterPress = (code: string) => {
    if (code === 'Enter') {
      handleSearch();
    }
  };

  const handleMyAccountClick = () => {
    if (user) {
      push(`/user/${user.id}`);
    } else {
      setIsLoginBoxOpened(!isLoginBoxOpened);
    }
  };

  const handleCartClick = () => setIsCartShowing();

  return (
    <Wrapper onKeyPress={({ code }) => handleEnterPress(code)}>
      <LogoWrapper to="/">
        <Logo color="#fff" height={50} width={200} />
      </LogoWrapper>
      <SearchWrapper>
        <SearchInput
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <SearchButton onClick={handleSearch}>Pesquisar</SearchButton>
      </SearchWrapper>
      <OptionsWrapper>
        <UserWrapper>
          <InternUserWrapper onClick={handleMyAccountClick}>
            <FaUser size={28} />
            <UserText>{getFirstName(user?.name) || 'Minha conta'}</UserText>
          </InternUserWrapper>
        </UserWrapper>
        <CartWrapper onClick={handleCartClick}>
          <CartIcon totalPrice={totalPrice} cartItems={totalProductsOnCart} />
        </CartWrapper>
        <LoginBoxWrapper>
          <LoginBox
            nameValue={formValues.name}
            onNameChange={name => genericFormChange(name, 'name')}
            isCreatingAccount={isCreatingAccount}
            onCreateAccountLinkClick={() =>
              setIsCreatingAccount(!isCreatingAccount)
            }
            onAccessClick={handleLogin}
            onCreateAccountClick={handleCreateAccount}
            emailValue={formValues.email}
            emailError={formErrors.email}
            passwordValue={formValues.password}
            onPasswordChange={password =>
              genericFormChange(password, 'password')
            }
            onEmailChange={onEmailChange}
            isShowing={isLoginBoxOpened}
          />
        </LoginBoxWrapper>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Header;
