import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { small, large, medium } = Spacings;
const { laptop, tablet } = Breakpoints;

export const Wrapper = styled.div`
  background-color: ${Colors.light?.primary.main};
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${medium}px ${large}px;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  color: ${Colors.light?.text.lighter};
  @media (max-width: ${laptop}px) {
    font-size: 1.5rem;
    margin-bottom: ${medium}px;
  }

  @media (max-width: ${tablet}px) {
    font-size: 1rem;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled(Link)`
  text-decoration: none;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width: 500px;
  width: 100%;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25%;

  @media (max-width: ${laptop}px) {
    justify-content: space-evenly;
    margin-top: ${medium}px;
    width: 100%;
  }

  @media (max-width: ${tablet}px) {
    justify-content: space-between;
  }
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: ${small}px;
  width: 100%;

  &:hover {
    cursor: text;
  }
`;

export const SearchButton = styled.button`
  color: #fff;
  background-color: #020202;
  border-radius: 5px;
  padding: ${small}px ${medium}px;

  &:hover {
    cursor: pointer;
  }
`;

export const CartWrapper = styled.div``;

export const CartIcon = styled.div``;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserIcon = styled.div``;

export const UserText = styled.p`
  margin-left: ${medium}px;
`;
