import { IResponse } from './IResponse';

export class ErrorResponse<T> implements IResponse<T> {

  public success: boolean;

  constructor(public error: T) {
    this.success = false;
  }

}
