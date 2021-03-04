import { Component } from '@angular/core';
import { IActionButton } from '../action-button/action-button.component';

@Component({
  selector: 'customify-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {

  public categoryBtnData: IActionButton = {
    name: 'Categories',
    icon: 'bx bx-layer'
  };

  public favoritesBtnData: IActionButton = {
    name: 'Favorites',
    icon: 'bx bx-heart'
  };

  constructor() { }

}
