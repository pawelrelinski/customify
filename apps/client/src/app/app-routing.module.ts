import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@customify/home').then(({ HomeModule }) => HomeModule)
  },
  {
    path: 'category',
    loadChildren: () => import('@customify/category').then(({ CategoryModule }) => CategoryModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@customify/profile').then(({ ProfileModule }) => ProfileModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
