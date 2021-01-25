import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from '../../../../libs/profile/src';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('@customify/home').then(({ HomeModule }) => HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@customify/profile').then(({ ProfileModule }) => ProfileModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
