import React, { FC } from 'react';
import { InputWrapper, TextField, TextFieldLabel, Error } from './styles';

type Props = {
  inputWrapperProps: React.HTMLAttributes<HTMLDivElement>;
  inputProps: React.HTMLAttributes<HTMLInputElement>;
  label: string;
  labelProps: React.HTMLAttributes<HTMLParagraphElement>;
  error: string;
  errorProps: React.HTMLAttributes<HTMLParagraphElement>;
};

const TextInput: FC<Props> = ({
  inputWrapperProps,
  inputProps,
  errorProps,
  error,
  label,
}) => {
  return (
    <InputWrapper {...inputWrapperProps}>
      <TextFieldLabel>{label}</TextFieldLabel>
      <TextField {...inputProps} />
      <Error {...errorProps}>{error}</Error>
    </InputWrapper>
  );
};

export default TextInput;
