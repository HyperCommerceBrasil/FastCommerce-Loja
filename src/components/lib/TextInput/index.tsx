import React, { FC } from 'react';
import { InputWrapper, TextField, TextFieldLabel, Error } from './styles';

type Props = {
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  fullWidth?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  labelProps?: React.HTMLAttributes<HTMLParagraphElement>;
  error?: string;
  errorProps?: React.HTMLAttributes<HTMLParagraphElement>;
};

const TextInput: FC<Props> = ({
  inputWrapperProps,
  inputProps,
  errorProps,
  error,
  label,
  fullWidth,
}) => {
  return (
    <InputWrapper {...inputWrapperProps} fullWidth={fullWidth}>
      <TextFieldLabel>{label}</TextFieldLabel>
      <TextField {...inputProps} />
      <Error {...errorProps}>{error}</Error>
    </InputWrapper>
  );
};

export default TextInput;
