import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWidget } from '../widget/widget.component';

export const INTERVAL_TIME_IN_MS = 5_000;

@Component({
  selector: 'customify-widget-spinner',
  templateUrl: './widget-spinner.component.html',
  styleUrls: ['./widget-spinner.component.scss']
})
export class WidgetSpinnerComponent implements OnInit, OnDestroy {

  public widgets: Array<IWidget> = [
    { img: './assets/mockup_products/apple-watch.png', mainText: 'Apple Watch', secondText: 'USD 279' },
    { img: './assets/mockup_products/ipad.png', mainText: 'iPad Pro', secondText: 'USD 1029' },
    { img: './assets/mockup_products/iphone-12.png', mainText: 'iPhone 12 Pro', secondText: 'USD 1199' }
  ];

  public indexOfCurrentWidget = 0;

  private intervalId: number;

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.setIntervalForChangeCurrentWidget();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  public changeCurrentWidget(index: number): void {
    this.indexOfCurrentWidget = index;
  }

  private async setIntervalForChangeCurrentWidget(): Promise<void> {
    this.intervalId = setInterval(() => {
      if (this.indexOfCurrentWidget === this.widgets.length - 1) {
        this.indexOfCurrentWidget = 0;
      } else {
        this.indexOfCurrentWidget += 1;
      }
    }, INTERVAL_TIME_IN_MS);
  }

}
