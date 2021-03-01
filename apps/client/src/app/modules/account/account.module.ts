import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AccountInformationComponent } from './components/account-information/account-information.component';
import { AccountInformationWrapperComponent } from './components/account-information-wrapper/account-information-wrapper.component';
import { UsernameEditComponent } from './components/username-edit/username-edit.component';
import { EmailEditComponent } from './components/email-edit/email-edit.component';
import { PhoneNumberEditComponent } from './components/phone-number-edit/phone-number-edit.component';
import { PasswordEditComponent } from './components/password-edit/password-edit.component';
import { AccountTypeEditComponent } from './components/account-type-edit/account-type-edit.component';
import { EditDataWrapperComponent } from './components/edit-data-wrapper/edit-data-wrapper.component';
import { PreviousPageComponent } from './components/previous-page/previous-page.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { UiModule } from '@customify/ui';


@NgModule({
  declarations: [
    AccountPageComponent,
    AccountComponent,
    AccountInformationComponent,
    AccountInformationWrapperComponent,
    UsernameEditComponent,
    EmailEditComponent,
    PhoneNumberEditComponent,
    PasswordEditComponent,
    AccountTypeEditComponent,
    EditDataWrapperComponent,
    PreviousPageComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AccountPageComponent },
      { path: 'information', component: AccountInformationComponent },
      { path: 'information/user-name', component: UsernameEditComponent },
      { path: 'information/email', component: EmailEditComponent },
      { path: 'information/phone-number', component: PhoneNumberEditComponent },
      { path: 'information/password', component: PasswordEditComponent },
      { path: 'information/account-type', component: AccountTypeEditComponent }
    ]),
    UiModule
  ]
})
export class AccountModule { }
