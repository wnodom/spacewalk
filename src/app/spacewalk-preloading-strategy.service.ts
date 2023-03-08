import { Injectable } from '@angular/core';
import { PreloadingStrategy, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { CustomRoute, CustomRouteData } from './custom-route-types';

@Injectable({
  providedIn: 'root'
})
export class SpacewalkPreloadingStrategy implements PreloadingStrategy {

  constructor(private activatedRoute: ActivatedRoute) { }

  preload(
    routeToCheck: CustomRoute,
    load: () => Observable<unknown>
  ): Observable<unknown> {

    // If this path is marked for preloading, just do it without any
    // additional checking.
    if (routeToCheck.data?.preload) {
      return load();
    }

    let ar = this.activatedRoute;
    while (ar.firstChild) {
      ar = ar.firstChild;
    }

    const activatedRouteConfigData = ar.snapshot.data as CustomRouteData;

    const nextPath = activatedRouteConfigData.nextPath;
    const previousPath = activatedRouteConfigData.previousPath;
    const pathToCheck = routeToCheck.path;

    // If this path is the next or the previous path in the routing
    // table, preload it.
    if (pathToCheck === nextPath || pathToCheck === previousPath) {
      return load();
    }

    // Otherwise, don't preload.
    return of(null);
  }
}
