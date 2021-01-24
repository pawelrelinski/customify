import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'customify-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public currentSubcategoryTitle: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeParams();
  }

  private subscribeParams(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentSubcategoryTitle = params['subcategory'];
    });
  }

}
