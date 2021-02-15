import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from '../../shared/shared.module';
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    NewProductFormComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductsListComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]),
    SharedModule
  ]
})
export class ProductsModule { }
