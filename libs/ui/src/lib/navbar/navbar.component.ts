import { Component, HostListener, Input, OnInit } from '@angular/core';
import { INavElement } from '../navbar-link-element/navbar-link-element.component';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navElements: Array<INavElement>;
  @Input() title: string = 'Customify';

  public menuIsOpen = false;
  private windowWidth: number;

  public logoData: INavElement = {
    routerLink: '/home',
    name: this.title,
    classes: 'bx bx-home'
  };

  constructor() {}

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  public toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  public hiddenMenu(): void {
    if (this.windowWidth >= 768) {
      return;
    }
    this.toggleMenu();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
  }

}
