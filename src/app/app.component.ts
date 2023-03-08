import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

import { SpacewalkRouteData } from './spacewalk-route-types';
import { lastFirstChild } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {

    const ar = lastFirstChild(this.activatedRoute);
    const activatedRouteConfigData = ar.snapshot.data as SpacewalkRouteData;

    const nextPath = activatedRouteConfigData.nextPath;
    const previousPath = activatedRouteConfigData.previousPath;

    let destination: string | undefined = '';

    switch (event.code) {

      case 'Backquote':
        destination = '/welcome';
        break;

      case 'Backslash':
        destination = '/menu';
        break;

      case 'BracketRight':
        destination = nextPath;
        break;

      case 'BracketLeft':
        destination = previousPath;
        break;
    }

    if (destination) {
      void this.router.navigate([destination]);
    }
  }
}
