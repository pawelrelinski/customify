import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@customify/ui'
import { PreviousPageButtonComponent } from './components/previous-page-button/previous-page-button.component';
import { SubPageTitleComponent } from './components/sub-page-title/sub-page-title.component';


@NgModule({
  declarations: [
    PreviousPageButtonComponent,
    SubPageTitleComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    UiModule,
    PreviousPageButtonComponent,
    SubPageTitleComponent
  ]
})
export class SharedModule { }
