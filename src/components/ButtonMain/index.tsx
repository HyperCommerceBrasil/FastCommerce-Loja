import React from 'react';
import { ButtonText, ThemedButton } from './styles';

type ButtonMainProps = {
  children: string;
};

const ButtonMain: React.FC<
  ButtonMainProps & React.HtmlHTMLAttributes<HTMLButtonElement>
> = ({ children, ...buttonProps }) => (
  <ThemedButton {...buttonProps}>
    <ButtonText>{children}</ButtonText>
  </ThemedButton>
);

export default ButtonMain;
