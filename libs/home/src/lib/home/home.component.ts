import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pageIntroHeaderData;

  constructor() { }

  ngOnInit(): void {
    this.pageIntroHeaderData = { title: 'home' };
  }

}
