import styled from 'styled-components';
import { Colors } from '../../utils';

const internButtonWrapperHeight = 100;

export const Wrapper = styled.div``;

export const ScrollabelContent = styled.div``;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  /* background-image: linear-gradient(
    to top,
    ${Colors.light?.primary.main},
    #f000
  ); */
  background-image: linear-gradient(to top, #fff, #f000);
  width: 100%;
`;

export const InternButtonWrapper = styled.div`
  height: ${internButtonWrapperHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
