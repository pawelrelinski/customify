import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CateogryPageComponent } from './components/cateogry-page/cateogry-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoryListElementComponent } from './components/category-list-element/category-list-element.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    CateogryPageComponent,
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
        component: CateogryPageComponent,
        children: [
          { path: 'category/:category', outlet: 'productsList', component: ProductsListComponent }
        ]
      }
    ])
  ]
})
export class CategoryModule { }
