import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBagPageComponent } from './components/shopping-bag-page/shopping-bag-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingBagPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShoppingBagPageComponent }
    ])
  ]
})
export class ShoppingBagModule { }
