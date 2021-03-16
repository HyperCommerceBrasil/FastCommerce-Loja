import React from 'react';
import { FaUser } from 'react-icons/fa';
import CartIcon from '../CartIcon';
import {
  CartWrapper,
  Logo,
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
    <CartWrapper>
      <CartIcon />
    </CartWrapper>
    <UserWrapper>
      <FaUser size={28} />
      <UserText>Minha conta</UserText>
    </UserWrapper>
  </Wrapper>
);

export default Header;
