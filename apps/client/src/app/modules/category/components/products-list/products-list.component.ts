import { Component, OnInit } from '@angular/core';
import { CurrentDisplayProductsListInCategoriesService as CurrentCategoryService } from '../../../../core/services/current-display-products-list-in-categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'customify-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public categoryName: string;

  private currentCategory$: Observable<string>;

  constructor(private currentCategoryService: CurrentCategoryService) { }

  ngOnInit(): void {
    this.currentCategory$ = this.currentCategoryService.getCurrentCategory();
    this.setCategoryName();
  }

  private setCategoryName(): void {
    this.currentCategory$.subscribe((category: string) => {
      this.categoryName = category;
    });
  }

}
