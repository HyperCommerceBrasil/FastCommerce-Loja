import React from 'react';
import { FaUser } from 'react-icons/fa';
import CartIcon from '../CartIcon';
import {
  CartWrapper,
  Logo,
  OptionsWrapper,
  SearchButton,
  SearchInput,
  SearchWrapper,
  UserText,
  UserWrapper,
  Wrapper,
} from './styles';

const Header: React.FC = () => (
  <Wrapper>
    <Logo>FastCommerce</Logo>
    <SearchWrapper>
      <SearchInput />
      <SearchButton>Pesquisar</SearchButton>
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

export default Header;
