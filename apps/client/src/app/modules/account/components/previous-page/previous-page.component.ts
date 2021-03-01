import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'customify-previous-page',
  template: `
    <div class='back-icon-wrapper'>
      <i class='bx bx-arrow-back' (click)='goToPreviousPage()'></i>
    </div>
  `,
  styleUrls: ['./previous-page.component.scss']
})
export class PreviousPageComponent {

  constructor(private location: Location) { }

  public goToPreviousPage(): void {
    this.location.back();
  }

}
