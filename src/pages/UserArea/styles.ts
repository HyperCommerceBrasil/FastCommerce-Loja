import styled from 'styled-components';
import { IoMdClose as IoMdCloseBase } from 'react-icons/io';
import { Breakpoints, Colors, Radius, Spacings } from '../../utils';

const { big, short, small, meaningless } = Spacings;
const { smallRadius } = Radius;
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
    /* align-items: center; */
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
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 60vh;
  /* background-color: #f13; */

  @media (max-width: ${tablet}px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const AddressesWrapper = styled.div`
  display: flex;

  @media (max-width: ${tablet}px) {
    flex-direction: column;
  }
`;

export const AddressCardsWrapper = styled.div`
  /* background-color: #1f6; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// export const NewAddressFormWrapper = styled.div<NewAddressFormWrapperProps>`
//   opacity: ${({ openState }) =>
//     openState === 'closed' || openState === 'none' ? '0' : '1'};
//   width: ${({ openState }) =>
//     openState === 'closed' || openState === 'none' ? '0' : '400px'};
//   animation-name: ${({ openState }) =>
//     openState ? NewAddressFormAnimations[openState] : ''};
//   animation-duration: 0.8s;
//   animation-timing-function: ease-in-out;
// `;

export const NewAddressFormWrapper = styled.div<NewAddressFormWrapperProps>`
  display: ${({ openState }) => (openState === 'closed' ? 'none' : 'unset')};
`;

export const NewAddressOutsideFormWrapper = styled.div<NewAddressFormWrapperProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* align-items: center; */
  /* background-color: #f16; */
  padding: ${short}px;

  border: 2px solid ${Colors.light?.primary.main};
  border-style: dashed;
  border-radius: ${smallRadius}px;
  opacity: ${({ openState }) => (openState === 'closed' ? '0' : '1')};
  width: ${({ openState }) => (openState === 'closed' ? '0' : '300px')};
  height: ${({ openState }) => (openState === 'closed' ? '0' : 'auto')};

  @media (max-width: ${tablet}px) {
    width: ${({ openState }) => (openState === 'closed' ? '0' : 'auto')};
    margin: ${small}px;
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
  flex-direction: column;
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
