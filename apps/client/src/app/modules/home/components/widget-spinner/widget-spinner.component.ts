import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWidget } from '../widget/widget.component';

@Component({
  selector: 'customify-widget-spinner',
  templateUrl: './widget-spinner.component.html',
  styleUrls: ['./widget-spinner.component.scss']
})
export class WidgetSpinnerComponent implements OnInit, OnDestroy {

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

  private interval: number;

  constructor() { }

  ngOnInit(): void {
    this.setIntervalForChangeCurrentWidget();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  public changeCurrentWidget(index: number) {
    this.indexOfCurrentWidget = index;
  }

  private setIntervalForChangeCurrentWidget() {
    const TIME_IN_MS = 5_000;

    this.interval = setInterval(() => {
      if (this.indexOfCurrentWidget === this.widgets.length - 1) {
        this.indexOfCurrentWidget = 0;
      } else {
        this.indexOfCurrentWidget += 1;
      }
    }, TIME_IN_MS);
  }

}
