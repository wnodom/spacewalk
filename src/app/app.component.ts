import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

import { CustomRouteData } from './custom-route-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

    let ar = this.activatedRoute;
    while (ar.firstChild) {
      ar = ar.firstChild;
    }

    const activatedRouteConfigData = ar.snapshot.data as CustomRouteData;

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
