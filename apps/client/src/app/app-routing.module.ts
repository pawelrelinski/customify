import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(({ HomeModule }) => HomeModule)
  },
  {
    path: 'category',
    loadChildren: () => import('@customify/category').then(({ CategoryModule }) => CategoryModule)
  },
  {
    path: 'products/:productId',
    loadChildren: () => import('./modules/product/product.module').then(({ ProductModule }) => ProductModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(({ AccountModule }) => AccountModule)
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
