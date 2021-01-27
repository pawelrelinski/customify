import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkElementComponent } from './components/link-element/link-element.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { AccountActionComponent } from './components/account-action/account-action.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    LinkElementComponent,
    LogoComponent,
    AccountActionComponent
  ],
  exports: [NavbarComponent]
})
export class NavbarModule {}
