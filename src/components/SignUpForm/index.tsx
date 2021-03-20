import { FormikProps, useFormikContext } from 'formik';
import React from 'react';
import { ButtonMain } from '..';
import {
  FormWrapper,
  InputWrapper,
  Title,
  Wrapper,
  TextField,
  RowInputs,
  ButtonWrapper,
  SmallInputWrapper,
} from './styles';

const SignUpForm: React.FC = () => {
  const {
    submitForm,
    values,
    errors,
    handleBlur,
    handleChange,
  }: FormikProps<SignUpFormValues> = useFormikContext();
  return (
    <Wrapper>
      <Title>Criando conta</Title>
      <FormWrapper>
        <InputWrapper>
          <TextField
            label="Nome Completo"
            placeholder="Jonas Adalberto Maria dos Santos"
            fullWidth
            value={values.fullName}
            onChange={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            error={!!errors?.fullName}
            helperText={errors?.fullName}
            id="sign_up_input_fullName"
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            label="CEP"
            placeholder="98780-103"
            value={values.zipCode}
            onChange={handleChange('zipCode')}
            onBlur={handleBlur('zipCode')}
            error={!!errors?.zipCode}
            helperText={errors?.zipCode}
            id="sign_up_input_zipCode"
          />
        </InputWrapper>
        <RowInputs>
          <SmallInputWrapper>
            <TextField
              label="UF"
              placeholder="RS"
              value={values.state}
              onChange={handleChange('state')}
              onBlur={handleBlur('state')}
              error={!!errors?.state}
              helperText={errors?.state}
              id="sign_up_input_state"
            />
          </SmallInputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              label="Cidade"
              placeholder="Santa Rosa"
              value={values.city}
              onChange={handleChange('city')}
              onBlur={handleBlur('city')}
              error={!!errors?.city}
              helperText={errors?.city}
              id="sign_up_input_city"
            />
          </InputWrapper>
        </RowInputs>
        <InputWrapper>
          <TextField
            fullWidth
            label="Endereço"
            placeholder="Rua Antunes Ribas nº 1813"
            value={values.address}
            onChange={handleChange('address')}
            onBlur={handleBlur('address')}
            error={!!errors?.address}
            helperText={errors?.address}
            id="sign_up_input_address"
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            label="Bairro"
            placeholder="Jacques Marciano"
            value={values.neighbourhood}
            onChange={handleChange('neighbourhood')}
            onBlur={handleBlur('neighbourhood')}
            error={!!errors?.neighbourhood}
            helperText={errors?.neighbourhood}
            id="sign_up_input_neighbourhood"
          />
        </InputWrapper>
      </FormWrapper>
      <ButtonWrapper>
        <ButtonMain onClick={submitForm}>Avançar</ButtonMain>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SignUpForm;
