import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductPageComponent }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
