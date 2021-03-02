import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { AccountPageHeaderComponent } from './components/account-page-header/account-page-header.component';
import { AccountInformationPageComponent } from './components/account-information-page/account-information-page.component';
import { AccountInformationWrapperComponent } from './components/account-information-wrapper/account-information-wrapper.component';
import { UsernameEditComponent } from './components/username-edit/username-edit.component';
import { EmailEditPageComponent } from './components/email-edit-page/email-edit-page.component';
import { PhoneNumberEditPageComponent } from './components/phone-number-edit-page/phone-number-edit-page.component';
import { PasswordEditPageComponent } from './components/password-edit-page/password-edit-page.component';
import { AccountTypeEditPageComponent } from './components/account-type-edit-page/account-type-edit-page.component';
import { EditDataWrapperComponent } from './components/edit-data-wrapper/edit-data-wrapper.component';
import { UiModule } from '@customify/ui';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { AccountRoutingModule } from './account-routing.module';
import { ReturnsAndRefundsPageComponent } from './components/returns-and-refunds-page/returns-and-refunds-page.component';
import { SecurityAndSettingsPageComponent } from './components/security-and-settings-page/security-and-settings-page.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AccountPageComponent,
    AccountPageHeaderComponent,
    AccountInformationPageComponent,
    AccountInformationWrapperComponent,
    UsernameEditComponent,
    EmailEditPageComponent,
    PhoneNumberEditPageComponent,
    PasswordEditPageComponent,
    AccountTypeEditPageComponent,
    EditDataWrapperComponent,
    OrdersPageComponent,
    ReturnsAndRefundsPageComponent,
    SecurityAndSettingsPageComponent,
    HelpPageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    UiModule,
    SharedModule
  ]
})
export class AccountModule { }
