import styled from 'styled-components';
import { Breakpoints, Colors } from '../../utils';

const { laptop } = Breakpoints;

const internButtonWrapperHeight = 100;

export const Wrapper = styled.div`
  display: none;
  z-index: 10;
  @media (max-width: ${laptop}px) {
    display: flex;
  }
`;

export const ScrollabelContent = styled.div``;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: linear-gradient(
    to top,
    ${Colors.light?.primary.main} -80%,
    #f000
  );
  width: 100%;
`;

export const InternButtonWrapper = styled.div`
  height: ${internButtonWrapperHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
