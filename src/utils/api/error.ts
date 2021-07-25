const defaultErrorMessage =
  'Algo deu errado no servidor... Tente novamente mais tarde';

export default class ResponseErrorHandler {
  message: string;

  status: string;

  code: string;

  constructor(err: {
    response: { data: { message: string }; status: string; code: string };
  }) {
    this.message = err.response?.data?.message || defaultErrorMessage;
    this.status = err.response?.status || '';
    this.code = err.response?.code || '0';
  }
}
