import React from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { CounterButton, CounterValue, Wrapper } from './styles';

type CounterProps = {
  setCounterValuePlus(currentValue: number): void;
  setCounterValueMinus(currentValue: number): void;
  counterValue: number;
  counterValueSizeRem?: number;
  buttonColor?: string;
  valueColor?: string;
  iconColor?: string;
  iconSize?: number;
};

const Counter: React.FC<CounterProps> = ({
  counterValue,
  setCounterValueMinus,
  setCounterValuePlus,
  iconColor = '#fff',
  valueColor,
  buttonColor,
  counterValueSizeRem,
  iconSize = 25,
}) => {
  return (
    <Wrapper>
      <CounterButton
        buttonColor={buttonColor}
        onClick={() => setCounterValueMinus(counterValue)}
      >
        <HiMinus size={iconSize} color={iconColor} />
      </CounterButton>
      <CounterValue
        counterValueSizeRem={counterValueSizeRem}
        color={valueColor}
      >
        {counterValue}
      </CounterValue>
      <CounterButton onClick={() => setCounterValuePlus(counterValue)}>
        <HiPlus size={iconSize} color={iconColor} />
      </CounterButton>
    </Wrapper>
  );
};

export default Counter;
