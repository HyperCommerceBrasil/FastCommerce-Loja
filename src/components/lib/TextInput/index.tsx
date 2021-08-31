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
  impossibleToEdit?: boolean;
};

const TextInput: FC<Props> = ({
  inputWrapperProps,
  inputProps,
  errorProps,
  error,
  label,
  fullWidth,
  impossibleToEdit = false,
}) => {
  return (
    <InputWrapper {...inputWrapperProps} fullWidth={fullWidth}>
      <TextFieldLabel>{label}</TextFieldLabel>
      <TextField
        {...inputProps}
        impossibleToEdit={impossibleToEdit}
        disabled={impossibleToEdit}
      />
      <Error {...errorProps}>{error}</Error>
    </InputWrapper>
  );
};

export default TextInput;
