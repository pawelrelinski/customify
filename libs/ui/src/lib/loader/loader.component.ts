import { Component } from '@angular/core';

@Component({
  selector: 'ui-loader',
  template: `
    <div class='loader'>
      <span></span>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
}
