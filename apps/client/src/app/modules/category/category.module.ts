import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryPageComponent } from './components/categry-page/category-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoryListElementComponent } from './components/category-list-element/category-list-element.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    CategoryPageComponent,
    CategoryListElementComponent,
    CategoriesListComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryPageComponent,
        children: [
          { path: 'category/:category', outlet: 'productsList', component: ProductsListComponent }
        ]
      }
    ])
  ]
})
export class CategoryModule { }
