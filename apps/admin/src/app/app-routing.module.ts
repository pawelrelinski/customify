import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(({ DashboardModule }) => DashboardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@customify/profile').then(({ ProfileModule }) => ProfileModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(({ ProductsModule }) => ProductsModule)
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
