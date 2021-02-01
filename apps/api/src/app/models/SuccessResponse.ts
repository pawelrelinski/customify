import { IResponse } from './IResponse';

export class SuccessResponse<T> implements IResponse<T>{

  public success: boolean;

  constructor(public data: T) {
    this.success = true;
  }

}
