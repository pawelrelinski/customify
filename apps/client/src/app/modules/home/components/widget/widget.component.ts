import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { INTERVAL_TIME_IN_MS } from '../widget-spinner/widget-spinner.component';

export interface IWidget {
  img: string;
  mainText: string;
  secondText: string;
}

enum changeWidgetStates {
  OUT = 'out',
  IN = 'in'
}

@Component({
  selector: 'customify-widget',
  animations: [
    trigger('changeWidget', [
      state(changeWidgetStates.IN, style({
        opacity: 1
      })),
      state(changeWidgetStates.OUT, style({
        opacity: 0.1
      })),
      transition('in=>out', animate('.5s')),
      transition('out=>in', animate('.5s')),
    ])
  ],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnDestroy {

  @Input() widget: IWidget;

  public currentStateAnimation: changeWidgetStates;

  private intervalId: number;

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.setIntervalForChangeCurrentWidget();
    this.setCurrentStateAnimationToIn();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private async setIntervalForChangeCurrentWidget(): Promise<void> {
    const WAIT_TIME_IN_MS = INTERVAL_TIME_IN_MS - 500;

    this.wait(WAIT_TIME_IN_MS).then(() => this.setCurrentStateAnimationToOut());

    setInterval(() => {
      this.wait(WAIT_TIME_IN_MS).then(() => this.setCurrentStateAnimationToOut());
      this.setCurrentStateAnimationToIn();
    }, INTERVAL_TIME_IN_MS);
  }

  private wait(time: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  private setCurrentStateAnimationToOut(): void {
    this.currentStateAnimation = changeWidgetStates.OUT;
  }

  private setCurrentStateAnimationToIn(): void {
    this.currentStateAnimation = changeWidgetStates.IN;
  }

}
