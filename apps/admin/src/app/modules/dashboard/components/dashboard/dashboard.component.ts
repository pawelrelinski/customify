import { Component, OnInit } from '@angular/core';
import { IPageIntroHeaderData } from '@customify/ui';

@Component({
  selector: 'customify-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public pageHeaderData: IPageIntroHeaderData = { title: 'Dashboard' };
  public isLoaded = false;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    setTimeout(() => this.isLoaded = true, 2000);
  }

}
