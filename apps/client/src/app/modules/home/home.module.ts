import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent }
    ]),
    SharedModule
  ]
})
export class HomeModule { }
