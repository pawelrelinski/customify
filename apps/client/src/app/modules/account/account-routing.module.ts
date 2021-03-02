import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { AccountInformationPageComponent } from './components/account-information-page/account-information-page.component';
import { UsernameEditComponent } from './components/username-edit/username-edit.component';
import { EmailEditPageComponent } from './components/email-edit-page/email-edit-page.component';
import { PhoneNumberEditPageComponent } from './components/phone-number-edit-page/phone-number-edit-page.component';
import { PasswordEditPageComponent } from './components/password-edit-page/password-edit-page.component';
import { AccountTypeEditPageComponent } from './components/account-type-edit-page/account-type-edit-page.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { ReturnsAndRefundsPageComponent } from './components/returns-and-refunds-page/returns-and-refunds-page.component';
import { SecurityAndSettingsPageComponent } from './components/security-and-settings-page/security-and-settings-page.component';
import { HelpPageComponent } from './components/help-page/help-page.component';

const routes: Routes = [
  { path: '', component: AccountPageComponent },
  { path: 'information', component: AccountInformationPageComponent },
  { path: 'information/user-name', component: UsernameEditComponent },
  { path: 'information/email', component: EmailEditPageComponent },
  { path: 'information/phone-number', component: PhoneNumberEditPageComponent },
  { path: 'information/password', component: PasswordEditPageComponent },
  { path: 'information/account-type', component: AccountTypeEditPageComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'returns-and-refunds', component: ReturnsAndRefundsPageComponent },
  { path: 'security-and-settings', component: SecurityAndSettingsPageComponent },
  { path: 'help', component: HelpPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
