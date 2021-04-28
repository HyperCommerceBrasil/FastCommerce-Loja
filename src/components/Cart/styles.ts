import styled from 'styled-components';
import { BsArrowRightShort as BsArrowRightShortBase } from 'react-icons/bs';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { short, medium } = Spacings;
const { laptop, fhd, tablet } = Breakpoints;

type WrapperProps = {
  isShowing?: boolean;
};

type ArrowWrapperProps = {
  isShowing?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: ${medium}px;
  width: 450px;
  z-index: 10;
  height: 100%;
  box-shadow: 0 0 24px #cccccc;
  position: fixed;
  background-color: ${Colors.light?.environment.main};
  right: ${({ isShowing }) => (isShowing ? 0 : -550)}px;
  transition: 0.6s;

  @media (max-width: ${fhd}px) {
    /* width: 25vw; */
  }

  @media (max-width: ${laptop}px) {
    /* width: 35vw; */
  }

  @media (max-width: ${tablet}px) {
    /* width: 60vw; */
  }
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: ${short}px; */
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
  height: 100px;
`;

export const FinalPrice = styled.h2`
  text-align: right;
  font-weight: 700;
  font-size: 2.5rem;
  color: ${Colors.light?.text.main};
`;
