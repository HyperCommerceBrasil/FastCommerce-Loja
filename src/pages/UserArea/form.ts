export const initialAddressFormValues: CreateUserAddress = {
  cep: '',
  city: '',
  defaultAddress: true,
  district: '',
  number: '',
  name: '',
  street: '',
  uf: '',
};

export const initialAddressFormErrors = {
  cep: undefined || '',
  city: undefined || '',
  defaultAddress: undefined || '',
  district: undefined || '',
  number: undefined || '',
  name: undefined || '',
  street: undefined || '',
  uf: undefined || '',
};

export const initialUserInfoFormValues: UserData = {
  birthdate: '',
  adresses: [],
  cpf: '',
  email: '',
  id: '',
  name: '',
  password: '',
};

export const initialUserInfoFormErrors = {
  birthdate: undefined || '',
  adresses: [] || '',
  cpf: undefined || '',
  email: undefined || '',
  id: undefined || '',
  name: undefined || '',
  password: undefined || '',
};
