import { Component, OnInit } from '@angular/core';
import { INavElement } from '@customify/ui';

@Component({
  selector: 'customify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public navElements: Array<INavElement> = [];

  constructor() { }

  ngOnInit(): void {
    this.setRouterLinks();
  }

  private setRouterLinks(): void {
    this.navElements.push(
      { routerLink: '/category', name: 'category', classes: 'bx bx-layer' },
      { routerLink: '/account', name: 'profile', classes: 'bx bx-user' },
      { routerLink: '/shopping-bag', name: 'shopping bag', classes: 'bx bx-shopping-bag' },
      { routerLink: '/favorites', name: 'favorites', classes: 'bx bx-heart' }
    );
  }

}
