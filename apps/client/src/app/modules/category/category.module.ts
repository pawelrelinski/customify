import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CateogryPageComponent } from './components/cateogry-page/cateogry-page.component';


@NgModule({
  declarations: [CateogryPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CateogryPageComponent }
    ])
  ]
})
export class CategoryModule { }
