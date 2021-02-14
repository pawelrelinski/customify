import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSource = new Subject<HttpErrorResponse>();

  public error$ = this.errorSource.asObservable();

  constructor() { }

  public sendErrorMessage(error: HttpErrorResponse): void {
    this.errorSource.next(error);
  }

}
