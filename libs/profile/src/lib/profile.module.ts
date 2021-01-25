import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UiModule } from '@customify/ui';

export const profileRoutes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    UiModule
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
