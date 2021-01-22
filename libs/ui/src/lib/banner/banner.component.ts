import { Component, Input, OnInit } from '@angular/core';

export interface IBanner {
  title: string;
  description: string;
  img?: string;
  backgroundColorInRGB?: string;
  height?: number;
  textColorInRgb?: string;
}

@Component({
  selector: 'customify-banner',
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
    // TODO: create Regex to check rgb
    return this.bannerData?.backgroundColorInRGB;
  }

  public getHeight() {
    const height: number = this.bannerData.height;
    return `${height}px`;
  }

}
