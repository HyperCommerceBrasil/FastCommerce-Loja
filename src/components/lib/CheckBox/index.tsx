import { CheckboxProps } from '@material-ui/core';
import React, { FC } from 'react';
import { InputWrapper, TextFieldLabel, Error, Checkbox } from './styles';

type Props = {
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  fullWidth?: boolean;
  checkBoxProps?: CheckboxProps;
  label?: string;
  labelProps?: React.HTMLAttributes<HTMLParagraphElement>;
  error?: string;
  errorProps?: React.HTMLAttributes<HTMLParagraphElement>;
};

const CheckBox: FC<Props> = ({
  inputWrapperProps,
  checkBoxProps,
  errorProps,
  error,
  label,
  fullWidth,
}) => {
  return (
    <InputWrapper {...inputWrapperProps} fullWidth={fullWidth}>
      <TextFieldLabel>{label}</TextFieldLabel>
      <Checkbox {...checkBoxProps} />
      <Error {...errorProps}>{error}</Error>
    </InputWrapper>
  );
};

export default CheckBox;
