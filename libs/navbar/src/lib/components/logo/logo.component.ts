import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILinkElement } from '../../models/ILinkElement';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  @Input() logoData: ILinkElement;
  @Output() clickLogo: EventEmitter<boolean> = new EventEmitter<boolean>();

  public emitClick(): void {
    this.clickLogo.emit(true);
  }

}
