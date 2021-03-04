import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { WidgetSpinnerComponent } from './components/widget-spinner/widget-spinner.component';
import { WidgetComponent } from './components/widget/widget.component';


@NgModule({
  declarations: [
    HomePageComponent,
    WidgetSpinnerComponent,
    WidgetComponent
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
