import { Component, Input, OnInit } from '@angular/core';

export interface IBanner {
  title: string;
  description: string;
  img?: string;
  backgroundColor?: string;
  height?: number;
  textColor?: string;
}

@Component({
  selector: 'ui-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() bannerData: IBanner;

  constructor() { }

  ngOnInit(): void {
    this.getHeight();
  }

  public getBackgroundColor(): string {
    if (!this.bannerData.backgroundColor)
      return 'rgb(71, 36, 217)';

    return this.bannerData.backgroundColor;
  }

  public getHeight(): string {
    if (!this.bannerData.height)
      return '300px';

    const height: number = this.bannerData.height;
    return `${height}px`;
  }

}
