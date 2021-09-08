import styled from 'styled-components';
import { IoMdClose as IoMdCloseBase } from 'react-icons/io';
import { Breakpoints, Colors, Spacings } from '../../../utils';

const { small, medium } = Spacings;
const { tablet } = Breakpoints;

type NewAddressFormWrapperProps = {
  openState?: 'opened' | 'closed' | 'none';
};

export const AddressesWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const AddressCardsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NewAddressFormWrapper = styled.div<NewAddressFormWrapperProps>`
  display: ${({ openState }) => (openState === 'closed' ? 'none' : 'flex')};
  justify-content: center;
  margin-bottom: ${medium}px;

  @media (max-width: ${tablet}px) {
    display: ${({ openState }) => (openState === 'closed' ? 'none' : 'unset')};
    justify-content: unset;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${small}px;

  &:hover {
    cursor: pointer;
  }
`;

export const NewAddressTitle = styled.h2`
  color: ${Colors.light?.text.main};
`;

export const IoMdClose = styled(IoMdCloseBase).attrs({
  color: Colors.light?.text.main,
})``;

export const NewAddressInternFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
