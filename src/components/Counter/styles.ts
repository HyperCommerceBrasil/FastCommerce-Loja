import styled from 'styled-components';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { smaller, short, medium } = Spacings;
const { tablet } = Breakpoints;

type CounterButtonProps = {
  buttonColor?: string;
};

type CounterValueProps = {
  counterValueSizeRem?: number;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CounterButton = styled.button<CounterButtonProps>`
  background-color: ${({ buttonColor }) =>
    buttonColor || Colors.light?.primary.main};
  border-radius: 8px;
  padding: ${short}px;

  @media (max-width: ${tablet}px) {
    padding: ${smaller}px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CounterValue = styled.p<CounterValueProps>`
  color: ${Colors.light?.text.main};
  font-size: ${({ counterValueSizeRem }) => counterValueSizeRem || 1.4}rem;
  margin: 0 ${medium}px;
`;
