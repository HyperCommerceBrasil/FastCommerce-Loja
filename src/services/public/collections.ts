import { AxiosResponse } from 'axios';
import api from '../api';

// const baseURLPublic = '/public';

export const fetchCollections = async (): Promise<
  AxiosResponse<Collections[]>
> => api.get<Collections[]>(`/collections`);
