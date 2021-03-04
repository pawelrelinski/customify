import { Component, Input } from '@angular/core';

export interface IWidget {
  img: string;
  mainText: string;
  secondText: string;
}

@Component({
  selector: 'customify-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  @Input() widget: IWidget;

  constructor() { }

}
