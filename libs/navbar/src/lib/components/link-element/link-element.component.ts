import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILinkElement } from '../../models/ILinkElement';

@Component({
  selector: 'link-element',
  templateUrl: './link-element.component.html',
  styleUrls: ['./link-element.component.scss']
})
export class LinkElementComponent {

  @Input() navElement: ILinkElement;
  @Output() clickLink: EventEmitter<boolean> = new EventEmitter<boolean>();

  public emitClick(): void {
    this.clickLink.emit(true);
  }


}
