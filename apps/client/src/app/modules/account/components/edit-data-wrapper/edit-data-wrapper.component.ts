import { Component, Input } from '@angular/core';

@Component({
  selector: 'customify-edit-data-wrapper',
  templateUrl: './edit-data-wrapper.component.html',
  styleUrls: ['./edit-data-wrapper.component.scss']
})
export class EditDataWrapperComponent {

  @Input() name: string;
  @Input() value: string;

  constructor() { }

}
