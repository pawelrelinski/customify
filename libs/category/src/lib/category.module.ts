import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { UiModule } from '@customify/ui';
import { CategoryListElementComponent } from './category-list-element/category-list-element.component';
import { BannersListComponent } from './banners-list/banners-list.component';

export const categoryRoutes: Route[] = [
  { path: '', component: CategoryListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes),
    UiModule
  ],
  declarations: [CategoryListComponent, CategoryListElementComponent, BannersListComponent],
  exports: [CategoryListComponent]
})
export class CategoryModule {}
