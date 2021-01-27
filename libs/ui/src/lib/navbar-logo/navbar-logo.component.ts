import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INavElement } from '@customify/ui';

@Component({
  selector: 'ui-navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.scss']
})
export class NavbarLogoComponent {

  @Input() logoData: INavElement;
  @Output() clickLogo: EventEmitter<boolean> = new EventEmitter<boolean>();

  public emitClick(): void {
    this.clickLogo.emit(true);
  }

}
