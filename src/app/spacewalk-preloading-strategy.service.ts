import { Injectable } from '@angular/core';
import { PreloadingStrategy, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { SpacewalkRoute, SpacewalkRouteData } from './spacewalk-route-types';
import { lastFirstChild } from './utils';

@Injectable({
  providedIn: 'root'
})
export class SpacewalkPreloadingStrategy implements PreloadingStrategy {

  constructor(private activatedRoute: ActivatedRoute) { }

  preload(
    routeToCheck: SpacewalkRoute,
    load: () => Observable<unknown>
  ): Observable<unknown> {

    // If this path is marked for preloading, just do it without any
    // additional checking.
    if (routeToCheck.data?.preload) {
      return load();
    }

    const ar = lastFirstChild(this.activatedRoute);
    const activatedRouteConfigData = ar.snapshot.data as SpacewalkRouteData;

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
