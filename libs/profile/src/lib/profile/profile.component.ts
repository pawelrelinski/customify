import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customify-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public pageIntroHeaderData;

  constructor() { }

  ngOnInit(): void {
    this.pageIntroHeaderData = { title: 'Profile' };
  }

}
