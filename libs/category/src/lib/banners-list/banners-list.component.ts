import { Component, OnInit } from '@angular/core';
import { IBanner } from '@customify/ui';

@Component({
  selector: 'customify-banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.scss']
})
export class BannersListComponent implements OnInit {

  public banners: Array<IBanner> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setBanners();
  }

  private setBanners(): void {
    this.banners.push({
      title: 'My first banner',
      description: 'It is sale for old collection',
      height: 300,
      backgroundColor: 'rgb(31,165,33)',
      textColor: 'rgb(255, 255, 255)'
    });
    this.banners.push({
      title: 'My second banner',
      description: 'It is sale for old collection',
      height: 100,
      backgroundColor: 'rgb(90,96,200)',
      textColor: 'rgb(231,158,158)'
    });
    this.banners.push({
      title: 'My third banner',
      description: 'It is sale for old collection',
      height: 300,
      backgroundColor: 'rgb(215,135,14)'
    });
  }

}
