import { Component, Input, OnInit } from '@angular/core';

export interface IPageIntroHeaderData {
  title: string;
  url?: string;
  alt?: string;
}

@Component({
  selector: 'ui-page-intro-header',
  templateUrl: './page-intro-header.component.html',
  styleUrls: ['./page-intro-header.component.scss']
})
export class PageIntroHeaderComponent implements OnInit {

  @Input() headerData: IPageIntroHeaderData;

  public isUrl: boolean;

  ngOnInit(): void {
    this.setIsUrl();
  }

  private setIsUrl(): void {
    this.isUrl = !!this.headerData.url;
  }

}
