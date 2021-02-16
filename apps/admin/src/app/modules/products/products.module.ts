import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { SharedModule } from '../../shared/shared.module';
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFilterBarComponent } from './components/product-filter-bar/product-filter-bar.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    NewProductFormComponent,
    ProductDetailsComponent,
    ProductTableComponent,
    ProductFilterBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductsPageComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]),
    SharedModule
  ]
})
export class ProductsModule { }
