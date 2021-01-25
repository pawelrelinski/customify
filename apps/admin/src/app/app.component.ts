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

  ngOnInit() {
    this.setNavElements();
  }

  private setNavElements(): void {
    this.navElements.push(
      { routerLink: '/profile', name: 'profile', classes: 'bx bx-user' }
    );
  }

}
