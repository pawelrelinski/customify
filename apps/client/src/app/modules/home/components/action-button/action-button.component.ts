import { Component, Input } from '@angular/core';

export interface IActionButton {
  icon: string;
  name: string;
}

@Component({
  selector: 'customify-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  @Input() data: IActionButton;

  constructor() { }

}
