import styled from 'styled-components';
import { BsArrowRightShort as BsArrowRightShortBase } from 'react-icons/bs';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { medium } = Spacings;
const { tablet, mobileWider } = Breakpoints;

type WrapperProps = {
  isShowing?: boolean;
};

type ArrowWrapperProps = {
  isShowing?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  width: 500px;
  height: 100%;
  z-index: 20;
  box-shadow: 3px 4px 13px #00000001 rgba(0, 0, 0, 0.19);
  position: fixed;
  background-color: ${Colors.light?.environment.main};
  right: ${({ isShowing }) => (isShowing ? 0 : -550)}px;
  transition: 0.6s;

  @media (max-width: ${tablet}px) {
    width: 400px;
  }

  @media (max-width: ${mobileWider}px) {
    width: 100vw;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const InternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${medium}px;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${medium}px 0;
`;

export const ArrowWrapper = styled.div<ArrowWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  height: 60px;
  width: 60px;
  background-color: ${Colors.light?.primary.main};
  transform: rotate(${({ isShowing }) => (isShowing ? '0deg' : '180deg')});
  transition: 1s;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light?.primary.darker};
  }
`;

export const HideArrow = styled(BsArrowRightShortBase).attrs({
  color: Colors.light?.text.lighter,
  size: 40,
})`
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  color: ${Colors.light?.text.main};
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BorderlineCartInfoitemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${medium}px;
  border: 2px solid ${Colors.light?.primary.main};
  border-radius: 16px;
  margin-top: ${medium}px;
`;

export const ShippingPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ShippingDescription = styled.h3`
  color: ${Colors.light?.text.main};
`;

export const ZipCodeInput = styled.input`
  display: flex;
  width: 100%;
  background: none;
  border-bottom: 1px solid ${Colors.light?.primary.main};
  margin: 0 ${medium}px;
`;

export const ShippingPrice = styled.h3`
  color: ${Colors.light?.text.main};
`;

export const ScrollableVertical = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`;

export const CartInfoitemWrapper = styled.button`
  display: flex;
  justify-content: center;
  padding: ${medium}px;
  background-color: ${Colors.light?.primary.main};
  border-radius: 16px;
  margin-top: ${medium}px;

  &:hover {
    cursor: pointer;
  }
`;

export const FinalPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FinalPrice = styled.h2`
  text-align: left;
  font-weight: 700;
  color: ${Colors.light?.text.main};
`;

export const BuyText = styled.h1`
  text-align: center;
  color: ${Colors.light?.text.lighter};
`;
