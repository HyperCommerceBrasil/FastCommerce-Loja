import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../assets';
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

const Header: React.FC = () => {
  const { push } = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () =>
    isValidSearch(searchValue)
      ? push(`/search?name=${searchValue}`)
      : error('🤔 Não entendi... use só letras, números ou espaços!');
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
