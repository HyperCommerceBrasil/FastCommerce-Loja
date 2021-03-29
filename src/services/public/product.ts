import { AxiosResponse } from 'axios';
import api from '../api';

const baseURLPublic = '/public';

export const fetchTrendingProducts = async (): Promise<
  AxiosResponse<Product[]>
> => api.get<Product[]>(`${baseURLPublic}/products/trends`);

export const fetchSingleProduct = async (
  productID: string,
): Promise<AxiosResponse<Product>> =>
  api.get<Product>(`${baseURLPublic}/products/listone/${productID}`);
