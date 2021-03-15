import React from 'react';
import { ButtonText, ThemedButton } from './styles';

type ButtonMainProps = {
  children: string;
};

const ButtonMain: React.FC<ButtonMainProps> = ({ children }) => (
  <ThemedButton>
    <ButtonText>{children}</ButtonText>
  </ThemedButton>
);

export default ButtonMain;
