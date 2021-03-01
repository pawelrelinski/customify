import { Component } from '@angular/core';

@Component({
  selector: 'customify-page-title',
  template: `
    <h1 class='title'>
      <ng-content></ng-content>
    </h1>`,
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {

  constructor() { }

}
