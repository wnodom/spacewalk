import { NgModule } from '@angular/core';
import { RouterModule, TitleStrategy } from '@angular/router';

import { SpacewalkRoute, SpacewalkRoutes } from './spacewalk-route-types';
import { SpacewalkTitleStrategy } from './spacewalk-title-strategy.service';
import { SpacewalkPreloadingStrategy } from './spacewalk-preloading-strategy.service';

function setNextAndPreviousPaths(
  route: SpacewalkRoute,
  index: number,
  routeList: SpacewalkRoutes
): SpacewalkRoute {
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

export const featureRoutes: SpacewalkRoutes = [
  {
    path: 'welcome',
    title: 'What? Who?',
    data: { preload: true },
    loadComponent: () => import('./welcome/welcome.component')
  },
  {
    path: 'menu',
    title: 'So Many Choices',
    data: { preload: true },
    loadComponent: () => import('./main-menu/main-menu.component')
  },

  {
    path: 'example-centering',
    title: 'Best Feature Ever!!1!',
    loadComponent: () => import('./example-centering/example-centering.component')
  },
  {
    path: 'example-sandbox',
    title: 'Some Assembly Required',
    loadComponent: () => import('./example-sandbox/example-sandbox.component')
  },
  {
    path: 'example-blocks',
    title: 'Playing With Blocks',
    loadComponent: () => import('./example-blocks/example-blocks.component')
  },
  {
    path: 'example-debugging',
    title: 'Good Grids Gone Bad',
    loadComponent: () => import('./example-debugging/example-debugging.component')
  },
  {
    path: 'example-image-gallery',
    title: 'Ooooh Pretty',
    loadComponent: () => import('./example-image-gallery/example-image-gallery.component')
  },
  {
    path: 'example-playing-cards',
    title: 'Playing With a Full Deck',
    loadComponent: () => import('./example-playing-cards/example-playing-cards.component')
  },
  {
    path: 'example-spanning',
    title: 'It\'s All Going According to Span',
    loadComponent: () => import('./example-spanning/example-spanning.component')
  },
  {
    path: 'example-overlap',
    title: 'When Worlds Collide',
    loadComponent: () => import('./example-overlap/example-overlap.component')
  },
  {
    path: 'example-forms',
    title: 'Plato Would be Proud',
    loadComponent: () => import('./example-forms/example-forms.component')
  },
  {
    path: 'example-media-objects',
    title: 'I Object!',
    loadComponent: () => import('./example-media-objects/example-media-objects.component')
  },
  {
    path: 'example-chessboard',
    title: 'The Grid of Kings',
    loadComponent: () => import('./example-chessboard/example-chessboard.component')
  },
  {
    path: 'example-transform',
    title: 'I Want to Break Free',
    loadComponent: () => import('./example-transform/example-transform.component')
  },
  {
    path: 'example-full-viewport',
    title: 'So Much Room for Activities!',
    loadComponent: () => import('./example-full-viewport/example-full-viewport.component')
  },
  {
    path: 'example-video-viewer',
    title: 'And Yet It Moves',
    loadComponent: () => import('./example-video-viewer/example-video-viewer.component')
  },
  {
    path: 'about',
    title: 'Say "What?" Again',
    loadComponent: () => import('./about/about.component')
  },
  {
    path: 'resources',
    title: 'And Furthermore',
    loadComponent: () => import('./resources/resources.component')
  }
];

const appRoutes: SpacewalkRoutes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  ...featureRoutes.map(setNextAndPreviousPaths),

  { path: '**', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {
      preloadingStrategy: SpacewalkPreloadingStrategy
    }
  )],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: SpacewalkTitleStrategy },
  ]
})
export class AppRoutingModule { }
