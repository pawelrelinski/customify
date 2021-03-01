import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@customify/ui'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    UiModule
  ]
})
export class SharedModule { }
