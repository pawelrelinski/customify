export interface IResponse<T> {
  success?: boolean;
  data?: Array<T> | T;
  error?: string | T;
}

export class Response<T> implements IResponse<T> {

  constructor(public data: T) { }

}
