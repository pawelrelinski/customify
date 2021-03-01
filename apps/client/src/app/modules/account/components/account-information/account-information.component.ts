import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'customify-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent {

  constructor(private location: Location,
              private router: Router) { }

  public goToPreviousPage() {
    this.location.back();
  }

  public async goToEditPage(event: string) {
    const pageName: string = event.split(' ').join('-').toLowerCase();
    await this.router.navigate([ `account/information/${pageName}` ]);
  }

}
