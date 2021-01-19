import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { UiModule } from '@customify/ui';

export const categoryRoutes: Route[] = [
  { path: '', component: CategoryListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes),
    UiModule
  ],
  declarations: [CategoryListComponent],
  exports: [CategoryListComponent]
})
export class CategoryModule {}
