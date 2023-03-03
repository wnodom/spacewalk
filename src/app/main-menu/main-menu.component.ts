import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';

import { examples } from '../examples';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [RouterLinkActive, RouterLink, NgFor]
})
export class MainMenuComponent {
  examples = examples;
}
