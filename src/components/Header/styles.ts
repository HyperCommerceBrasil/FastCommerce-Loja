import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser as FaUserBase } from 'react-icons/fa';
import { default as LoginBoxBase } from '../LoginBox';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { small, large, medium } = Spacings;
const { laptop, tablet } = Breakpoints;

export const Wrapper = styled.div`
  background-color: ${Colors.light?.primary.main};
  color: ${Colors.light?.text.lighter};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${medium}px ${large}px;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  text-decoration: none;

  @media (max-width: ${laptop}px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width: 500px;
  width: 100%;
`;

export const OptionsWrapper = styled.div`
  position: relative;
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

  @media (max-width: ${laptop}px) {
    margin-top: ${medium}px;
  }
`;

export const SearchButton = styled.button`
  color: ${Colors.light?.text.lighter};
  background-color: #020202;
  border-radius: 5px;
  padding: ${small}px ${medium}px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${laptop}px) {
    margin-top: ${medium}px;
  }
`;

export const CartWrapper = styled.button`
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const CartIcon = styled.div``;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaUser = styled(FaUserBase).attrs({
  color: '#fff',
})`
  color: ${Colors.light?.text.lighter};
`;

export const InternUserWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const LoginBoxWrapper = styled.div`
  z-index: 10;
  display: flex;
  width: 100%;
  position: absolute;
  top: 50px;

  @media (max-width: ${laptop}px) {
    left: unset;
  }

  @media (max-width: ${tablet}px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const UserIcon = styled.div``;

export const UserText = styled.p`
  margin-left: ${medium}px;
  color: ${Colors.light?.text.lighter};
`;

export const LoginBox = styled(LoginBoxBase)``;
