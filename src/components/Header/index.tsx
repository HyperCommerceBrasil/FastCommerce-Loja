import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { error, isValidSearch } from '../../utils';
import CartIcon from '../CartIcon';
import {
  CartWrapper,
  Logo,
  LogoWrapper,
  OptionsWrapper,
  SearchButton,
  SearchInput,
  SearchWrapper,
  UserText,
  UserWrapper,
  Wrapper,
} from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () =>
    isValidSearch(searchValue)
      ? history.push(`search&query=${searchValue}`)
      : error('🤔 Não entendi... use só letras, números ou espaços!');
  return (
    <Wrapper>
      <LogoWrapper to="/">
        <Logo>FastCommerce</Logo>
      </LogoWrapper>
      <SearchWrapper>
        <SearchInput
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <SearchButton onClick={handleSearch}>Pesquisar</SearchButton>
      </SearchWrapper>
      <OptionsWrapper>
        <CartWrapper>
          <CartIcon />
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
