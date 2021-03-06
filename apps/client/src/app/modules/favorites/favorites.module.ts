import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: FavoritesPageComponent }
    ])
  ]
})
export class FavoritesModule { }
