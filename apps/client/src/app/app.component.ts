import { Component, OnInit } from '@angular/core';
import { INavElement } from '@customify/ui';
import { CheckIsAuthPathService } from '@customify/auth';

@Component({
  selector: 'customify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public navElements: Array<INavElement> = [];
  public isAuthPath: boolean;

  constructor(private checkIsAuthPath: CheckIsAuthPathService) { }

  ngOnInit(): void {
    this.setRouterLinks();
    this.checkAuthPath();
  }

  private setRouterLinks(): void {
    this.navElements.push(
      { routerLink: '/category', name: 'category', classes: 'bx bx-layer' },
      { routerLink: '/shopping-bag', name: 'shopping bag', classes: 'bx bx-shopping-bag' },
      { routerLink: '/favorites', name: 'favorites', classes: 'bx bx-heart' },
      { routerLink: '/account', name: 'Account', classes: 'bx bx-user' }
    );
  }

  private checkAuthPath(): void {
    this.checkIsAuthPath.isAuthPath().subscribe(isAuth => {
      this.isAuthPath = isAuth;
    });
  }

}
