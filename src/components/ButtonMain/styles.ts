import styled from 'styled-components';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { large } = Spacings;
const { tablet, laptop } = Breakpoints;

export const ThemedButton = styled.button`
  padding: ${large}px;
  background-color: ${Colors.light?.primary.main};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light?.primary.darker};
  }
`;

export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  color: ${Colors.light?.text.lighter};

  @media (max-width: ${laptop}px) {
    font-size: 1.2rem;
  }

  @media (max-width: ${tablet}px) {
    font-size: 1rem;
  }
`;
