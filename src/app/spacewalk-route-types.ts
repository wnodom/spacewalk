import { Data, Route } from "@angular/router";

export interface SpacewalkRouteData extends Data {
  preload?: boolean;
  teaser?: string;
  nextPath?: string;
  previousPath?: string;
}

export interface SpacewalkRoute extends Route {
  data?: SpacewalkRouteData;
}

export type SpacewalkRoutes = SpacewalkRoute[];

