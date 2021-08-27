import { AxiosResponse, default as api } from 'axios';
import ResponseErrorHandler from '../utils/api/error';

export const fetchZipCodeData = async (
  cep: string,
): Promise<AxiosResponse<ViacepResponse>> => {
  try {
    return api.get(`https://viacep.com.br/ws/${cep}/json/`);
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};
