import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UiModule } from '@customify/ui';

export const homeRoutes: Route[] = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    UiModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
