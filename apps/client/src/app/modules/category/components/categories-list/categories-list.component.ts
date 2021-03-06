import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customify-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  public categories: Array<string> = [ 'all', 'computers', 'accessories', 'smartphones' ];

  constructor() { }

  ngOnInit(): void {
  }

}
