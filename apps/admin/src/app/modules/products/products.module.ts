import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent
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
