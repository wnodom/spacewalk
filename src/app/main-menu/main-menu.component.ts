import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CustomRoute } from '../custom-route-types';
import { featureRoutes } from '../app-routing.module';

function ensureTitlesAreStrings(item: CustomRoute): CustomRoute {
  return {
    ...item,
    title: typeof(item.title) === 'string'
      ? item.title
      : item.path
  };
}

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [RouterLink, NgFor]
})
export default class MainMenuComponent {
  menuItems = featureRoutes
    // Don't include this menu in the menu choices
    .filter(item => item.path !== 'menu')
    .map(ensureTitlesAreStrings)
  ;
}
