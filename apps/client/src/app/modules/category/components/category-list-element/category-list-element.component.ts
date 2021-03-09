import { Component, Input } from '@angular/core';
import { CurrentDisplayProductsListInCategoriesService as CurrentCategoryService } from '../../../../core/services/current-display-products-list-in-categories.service';

@Component({
  selector: 'customify-category-list-element',
  templateUrl: './category-list-element.component.html',
  styleUrls: ['./category-list-element.component.scss']
})
export class CategoryListElementComponent {

  @Input() categoryName: string;

  constructor(private currentCategory: CurrentCategoryService) {
  }

  public updateCategory(): void {
    this.currentCategory.setCurrentCategory(this.categoryName);
  }

}
