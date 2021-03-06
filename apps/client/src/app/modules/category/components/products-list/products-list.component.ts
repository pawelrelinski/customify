import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'customify-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public categoryName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.setCategoryName();
    this.activatedRoute.params.subscribe(params => {
      console.log(params['category']);
    });
  }

  private setCategoryName(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.categoryName = params['category'];
    });
  }

}
