import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'customify-previous-page',
  template: `
    <div class='back-icon-wrapper'>
      <i class='bx bx-arrow-back' (click)='goToPreviousPage()'></i>
    </div>
  `,
  styleUrls: ['./previous-page-button.component.scss']
})
export class PreviousPageButtonComponent {

  constructor(private location: Location) { }

  public goToPreviousPage(): void {
    this.location.back();
  }

}
