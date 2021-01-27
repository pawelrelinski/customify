import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ILinkElement } from '../../models/ILinkElement';
import { IColors } from '../../models/IColors';

@Component({
  selector: 'customify-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navElements: Array<ILinkElement>;
  @Input() title = 'Customify';
  @Input() colors: IColors;

  public menuIsOpen = false;
  private windowWidth: number;

  public readonly userBtnData: ILinkElement = {
    routerLink: '/action',
    name: 'Log out',
    classes: 'bx bx-log-out',
    colors: {
      mainColor: ' #f7f6fb',
      mainColorLight: '#AFA5D9'
    }
  };

  public readonly logoData: ILinkElement = {
    routerLink: '/home',
    name: this.title,
    classes: 'bx bx-home',
    colors: {
      mainColor: ' #f7f6fb',
      mainColorLight: '#AFA5D9'
    }
  };

  ngOnInit(): void {
    this.setWindowWidth();
    this.colors = {
      mainColor: '#f7f6fb',
      mainColorLight: '#AFA5D9'
    };
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
  private onResize(event: Event | never): void {
    this.windowWidth = window.innerWidth;
  }

  private setWindowWidth(): void {
    this.windowWidth = window.innerWidth;
  }

}
