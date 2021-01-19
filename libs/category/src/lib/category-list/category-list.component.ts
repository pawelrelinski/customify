import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customify-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public pageIntroHeaderData;

  constructor() { }

  ngOnInit(): void {
    this.pageIntroHeaderData = { title: 'Categories' };
  }

}
