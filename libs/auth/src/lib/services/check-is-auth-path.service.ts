import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckIsAuthPathService {

  private authPaths: Array<string> = [
    '/auth',
    '/auth/login',
    '/auth/register'
  ];

  private _isAuthPath = new Subject<boolean>();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        const currentUrl: string = event['url'];
        const isAuthPath = this.authPaths.some(path => path === currentUrl);
        this._isAuthPath.next(isAuthPath);
      });
  }

  public isAuthPath(): Observable<boolean> {
    return this._isAuthPath.asObservable();
  }

}
