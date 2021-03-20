import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  neighbourhood: yup.string().required(),
  fullName: yup.string().required(),
  zipCode: yup.string().required(),
  address: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
});

export const initialValues: SignUpFormValues = {
  neighbourhood: '',
  fullName: '',
  zipCode: '',
  address: '',
  state: '',
  city: '',
};
