export interface IResponse<T> {
  success?: boolean;
  data?: Array<T> | T;
  error?: string | T;
}
