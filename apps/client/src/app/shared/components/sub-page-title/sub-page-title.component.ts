import { Component } from '@angular/core';

@Component({
  selector: 'customify-subpage-title',
  template: `
    <h1 class='title'>
      <ng-content></ng-content>
    </h1>`,
  styleUrls: ['./sub-page-title.component.scss']
})
export class SubPageTitleComponent {

  constructor() { }

}
