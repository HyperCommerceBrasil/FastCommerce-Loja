const defaultErrorMessage =
  'Algo deu errado no servidor... Tente novamente mais tarde';

export default class ResponseErrorHandler {
  message: string;

  status: string;

  constructor(err: {
    response: { data: { message: string }; status: string };
  }) {
    this.message = err.response?.data?.message || defaultErrorMessage;
    this.status = err.response?.status || '';
  }
}
