import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../assets';
import { GlobalCartContext } from '../../contexts';
import { error, isValidSearch } from '../../utils';
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
} from './styles';

type HeaderProps = {
  onSearchName?(name: string): void;
};

const Header: React.FC<HeaderProps> = ({ onSearchName }) => {
  const { push } = useHistory();
  const { setIsCartShowing, totalPrice, totalProductsOnCart } = useContext(
    GlobalCartContext,
  );
  const [isLoginBoxShowing, setIsLoginBoxShowing] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (isValidSearch(searchValue)) {
      push(`/search?name=${searchValue}`);
      if (onSearchName) onSearchName(searchValue);
    } else {
      error('🤔 Não entendi... use só letras, números ou espaços!');
    }
  };

  const handleEnterPress = (code: string) => {
    if (code === 'Enter') {
      handleSearch();
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
          <InternUserWrapper
            onClick={() => setIsLoginBoxShowing(!isLoginBoxShowing)}
          >
            <FaUser size={28} />
            <UserText>Minha conta</UserText>
          </InternUserWrapper>
          <LoginBox isShowing={isLoginBoxShowing} />
        </UserWrapper>
        <CartWrapper onClick={handleCartClick}>
          <CartIcon totalPrice={totalPrice} cartItems={totalProductsOnCart} />
        </CartWrapper>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Header;
