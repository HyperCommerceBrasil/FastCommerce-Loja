import { default as api } from 'axios';
import ResponseErrorHandler from '../utils/api/error';

export const fetchZipCodeData = async (
  cep: string,
): Promise<ViacepResponse> => {
  try {
    const response = await api.get<ViacepResponse>(
      `https://viacep.com.br/ws/${cep}/json/`,
    );

    return response.data;
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};
