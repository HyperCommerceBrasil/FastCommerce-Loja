import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../assets';
import { GlobalCartContext, GlobalUserContext } from '../../contexts';
import { error, isValidSearch, getFirstName } from '../../utils';
import CartIcon from '../CartIcon';
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

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSearch = () => {
    if (isValidSearch(searchValue)) {
      push(`/search?name=${searchValue}`);
      if (onSearchName) onSearchName(searchValue);
    } else {
      error('🤔 Não entendi... use só letras, números ou espaços!');
    }
  };

  const handleLogin = async (
    email: string,
    password: string,
  ): Promise<void> => {
    try {
      await login({ email, password });

      setIsLoginBoxOpened(false);
      setPassword('');
      setEmail('');
    } catch (err) {
      error(err.message);
    }
  };

  const handleCreateAccount = async (
    name: string,
    email: string,
    password: string,
  ) => {
    try {
      await createUser({ email, name, password }, true);

      setIsLoginBoxOpened(false);
      setPassword('');
      setEmail('');
      setName('');
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
            nameValue={name}
            onNameChange={setName}
            isCreatingAccount={isCreatingAccount}
            onCreateAccountLinkClick={() =>
              setIsCreatingAccount(!isCreatingAccount)
            }
            onAccessClick={handleLogin}
            onCreateAccountClick={handleCreateAccount}
            emailValue={email}
            passwordValue={password}
            onPasswordChange={setPassword}
            onEmailChange={setEmail}
            isShowing={isLoginBoxOpened}
          />
        </LoginBoxWrapper>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Header;
