import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { AuthPageTemplateComponent } from './components/auth-page-template/auth-page-template.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: '', redirectTo: 'login', pathMatch: 'prefix' }
    ])
  ],
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AuthPageTemplateComponent
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent
  ]
})
export class AuthModule {}
