import React from 'react';
import { ButtonText, ThemedButton } from './styles';

type ButtonMain = {
  children: string;
};

const ButtonMain: React.FC = ({ children }) => (
  <ThemedButton>
    <ButtonText>{children}</ButtonText>
  </ThemedButton>
);

export default ButtonMain;
