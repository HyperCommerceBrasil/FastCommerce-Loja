import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../assets';
import { GlobalCartContext } from '../../contexts';
import { error, isValidSearch } from '../../utils';
import CartIcon from '../CartIcon';
import {
  CartWrapper,
  LogoWrapper,
  OptionsWrapper,
  SearchButton,
  SearchInput,
  SearchWrapper,
  UserText,
  UserWrapper,
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
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (isValidSearch(searchValue)) {
      push(`/search?name=${searchValue}`);
      if (onSearchName) onSearchName(searchValue);
    } else {
      error('🤔 Não entendi... use só letras, números ou espaços!');
    }
  };

  const handleCartClick = () => setIsCartShowing();

  return (
    <Wrapper>
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
        <CartWrapper onClick={() => handleCartClick()}>
          <CartIcon totalPrice={totalPrice} cartItems={totalProductsOnCart} />
        </CartWrapper>
        <UserWrapper>
          <FaUser size={28} />
          <UserText>Minha conta</UserText>
        </UserWrapper>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Header;
