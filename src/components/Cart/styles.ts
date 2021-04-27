import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { BsArrowRightShort as BsArrowRightShortBase } from 'react-icons/bs';
import { Colors, Spacings, Breakpoints } from '../../utils';

// const defaultProductImageNotFound =
//   'https://www.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png';

const { short } = Spacings;
const { laptop, fhd, tablet } = Breakpoints;

type WrapperProps = {
  isShowing?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: ${short}px;
  width: 18vw;
  height: 100%;
  box-shadow: 0 0 24px #cccccc;
  position: absolute;
  background-color: ${Colors.light?.environment.lighter};
  right: ${({ isShowing }) => (isShowing ? 0 : -36)}vw;
  transition: 0.6s;

  &:hover {
    box-shadow: 0 0 14px ${Colors.light?.primary.main};
  }

  @media (max-width: ${fhd}px) {
    width: 25vw;
  }

  @media (max-width: ${laptop}px) {
    width: 35vw;
  }

  @media (max-width: ${tablet}px) {
    width: 60vw;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
