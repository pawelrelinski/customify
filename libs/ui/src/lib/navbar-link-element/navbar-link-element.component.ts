import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface INavElement {
  readonly routerLink: string;
  readonly name: string;
  readonly classes: string;
}

@Component({
  selector: 'ui-navbar-link-element',
  templateUrl: './navbar-link-element.component.html',
  styleUrls: ['./navbar-link-element.component.scss']
})
export class NavbarLinkElementComponent {

  @Input() navElement: INavElement;
  @Output() clickLink: EventEmitter<boolean> = new EventEmitter<boolean>();

  public emitClick(): void {
    this.clickLink.emit(true);
  }

}
