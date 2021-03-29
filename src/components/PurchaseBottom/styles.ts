import styled from 'styled-components';
import { Colors } from '../../utils';

const internButtonWrapperHeight = 100;

export const Wrapper = styled.div`
  z-index: 10;
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
  width: 100vw;
`;

export const InternButtonWrapper = styled.div`
  height: ${internButtonWrapperHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
