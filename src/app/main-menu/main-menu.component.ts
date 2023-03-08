import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

import { SpacewalkRoutes } from '../spacewalk-route-types';

@Component({
  selector: 'eva-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [RouterLink, NgFor]
})
export default class MainMenuComponent {

  menuItems: SpacewalkRoutes;

  constructor(router: Router) {
    // Only show items that have a teaser
    this.menuItems = (router.config as SpacewalkRoutes)
      .filter((item) => item.data?.teaser)
    ;
  }
}
