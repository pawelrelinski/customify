import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from '../../shared/shared.module';
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    NewProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductsListComponent }
    ]),
    SharedModule
  ]
})
export class ProductsModule { }
