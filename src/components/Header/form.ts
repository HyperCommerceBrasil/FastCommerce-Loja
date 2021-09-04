export const initialFormValues: UserSignupCredentials = {
  email: '',
  name: '',
  password: '',
};

export const initialFormErrors: Partial<UserSignupCredentials> = {
  email: undefined || '',
  name: undefined || '',
  password: undefined || '',
};
