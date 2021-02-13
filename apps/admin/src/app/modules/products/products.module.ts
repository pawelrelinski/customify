import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { UiModule } from '@customify/ui';
import { TableOfProductsComponent } from './components/table-of-products/table-of-products.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    TableOfProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TableOfProductsComponent }
    ]),
    UiModule
  ]
})
export class ProductsModule { }
