import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@customify/ui';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule
  ],
  exports: [
    UiModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
