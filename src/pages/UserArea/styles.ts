import styled from 'styled-components';
import { IoMdClose as IoMdCloseBase } from 'react-icons/io';
import { Breakpoints, Colors, Spacings } from '../../utils';

const { big, short, small, medium, meaningless } = Spacings;
const { tablet } = Breakpoints;

type NewAddressFormWrapperProps = {
  openState?: 'opened' | 'closed' | 'none';
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const InternWrapper = styled.div`
  display: flex;
  padding: ${big}px;
  background-color: ${Colors.light?.environment.lighter};

  @media (max-width: ${tablet}px) {
    padding: 0;
    flex-direction: column;
  }
`;

export const DrawerWrapper = styled.div`
  display: flex;

  @media (max-width: ${tablet}px) {
    align-items: center;
  }
`;

export const DrawerSelectedWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 60vh;

  @media (max-width: ${tablet}px) {
    align-items: center;
    flex-direction: column;
  }
`;

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

export const InputWrapper = styled.div`
  margin: ${short}px 0;
`;

export const TextFieldLabel = styled.h4`
  text-align: left;
  font-weight: 300;
  margin-bottom: ${meaningless}px;
  color: ${Colors.light?.text.main};
`;

export const AccountInformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${medium}px;
  width: 100%;

  @media (max-width: ${tablet}px) {
    display: unset;
    justify-content: unset;
  }
`;

export const AccountInformationSubtitle = styled.h2`
  color: ${Colors.light?.text.main};
`;
