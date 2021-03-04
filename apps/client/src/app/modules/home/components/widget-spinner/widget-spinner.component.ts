import { Component, OnInit } from '@angular/core';
import { IWidget } from '../widget/widget.component';

@Component({
  selector: 'customify-widget-spinner',
  templateUrl: './widget-spinner.component.html',
  styleUrls: ['./widget-spinner.component.scss']
})
export class WidgetSpinnerComponent implements OnInit {

  public widgets: Array<IWidget> = [
    {
      img: './assets/mockup_products/apple-watch.png',
      mainText: 'Apple Watch',
      secondText: 'USD 279'
    },
    {
      img: './assets/mockup_products/ipad.png',
      mainText: 'iPad Pro',
      secondText: 'USD 1029'
    },
    {
      img: './assets/mockup_products/iphone-12.png',
      mainText: 'iPhone 12 Pro',
      secondText: 'USD 1199'
    }
  ];

  public indexOfCurrentWidget = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public changeCurrentWidget(index: number) {
    this.indexOfCurrentWidget = index;
  }

}
