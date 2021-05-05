import styled from 'styled-components';
import { BsArrowRightShort as BsArrowRightShortBase } from 'react-icons/bs';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { medium, big } = Spacings;
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
  box-shadow: 0 0 24px #cccccc;
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

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  padding: ${medium}px;
  background-color: ${Colors.light?.primary.main};
  border-radius: 16px;
  margin: ${big}px 0;
`;

export const FinalPrice = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 1rem;
  color: ${Colors.light?.text.lighter};
`;
