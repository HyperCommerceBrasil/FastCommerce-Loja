import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { small, large, medium } = Spacings;

export const Wrapper = styled.div`
  background-color: ${Colors.light?.primary.main};
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${medium}px ${large}px;
`;

export const Logo = styled.h1``;

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width: 500px;
  width: 100%;
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
  border: none;
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
