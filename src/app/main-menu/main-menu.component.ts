import { Component } from '@angular/core';

import { examples } from '../examples';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  examples = examples;
}
