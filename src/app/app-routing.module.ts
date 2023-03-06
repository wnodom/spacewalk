import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomRoute, CustomRoutes } from './custom-route-types';

import { AppCustomPreloader } from './app-custom-preloader';

import { examples } from './examples';

function setNextAndPreviousPaths(
  route: CustomRoute,
  index: number,
  routeList: CustomRoutes
) {
  const newRoute = {

    // Preserve all existing route info.
    ...route,

    // Create a data block unless there's one already.
    data: route.data ? { ...route.data } : {}
  };

  // If there's a route after this one, remember it.
  if (index < (routeList.length - 1)) {
    newRoute.data.nextPath = routeList[ index + 1 ].path;
  }

  // If there's a route before this one, remember it.
  if (index > 0) {
    newRoute.data.previousPath = routeList[ index - 1 ].path;
  }

  return newRoute;
}

const featureRoutes: CustomRoutes = [
  {
    path: 'welcome',
    data: { preload: true },
    loadComponent: () => import('./welcome/welcome.component')
  },
  {
    path: 'menu',
    data: { preload: true },
    loadComponent: () => import('./main-menu/main-menu.component')
  },

  ...examples,

  {
    path: 'about',
    loadComponent: () => import('./about/about.component')
  },
  {
    path: 'resources',
    loadComponent: () => import('./resources/resources.component')
  }
];

const appRoutes: CustomRoutes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  ...featureRoutes.map(setNextAndPreviousPaths),

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {
      preloadingStrategy: AppCustomPreloader
    }
  )],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
