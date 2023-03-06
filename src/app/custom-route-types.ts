import { Data, Route } from "@angular/router";

export interface CustomRouteData extends Data {
  preload?: boolean;
  nextPath?: string;
  previousPath?: string;
}

export interface CustomRoute extends Route {
  data?: CustomRouteData;
}

export type CustomRoutes = CustomRoute[];

