import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(({ HomeModule }) => HomeModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./modules/category/category.module').then(({ CategoryModule }) => CategoryModule)
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
    path: 'favorites',
    loadChildren: () => import('./modules/favorites/favorites.module').then(({ FavoritesModule }) => FavoritesModule)
  },
  {
    path: 'shopping-bag',
    loadChildren: () => import('./modules/shopping-bag/shopping-bag.module').then(({ ShoppingBagModule }) => ShoppingBagModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
