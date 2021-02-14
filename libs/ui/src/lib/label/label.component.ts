import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-label',
  template: `
    <label class='label'>
      <p>{{ name | titlecase }}:</p>
      <ng-content></ng-content>
    </label>
  `,
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() name: string;
}
