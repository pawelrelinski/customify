import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'customify-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title = 'Customify';
  public menuIsOpen = false;
  private windowWidth: number;

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
