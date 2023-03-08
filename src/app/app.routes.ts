import { SpacewalkRoute, SpacewalkRoutes } from './spacewalk-route-types';

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

const featureRoutes: SpacewalkRoutes = [
  {
    path: 'welcome',
    title: 'Welcome',
    data: {
      preload: true,
      teaser: 'What? Who?',
    },
    loadComponent: () => import('./welcome/welcome.component')
  },
  {
    path: 'menu',
    title: 'Menu',
    data: {
      preload: true,
    },
    loadComponent: () => import('./main-menu/main-menu.component')
  },

  {
    path: 'example-centering',
    title: 'Centering',
    data: {
      teaser: 'Best Feature Ever!!1!'
    },
    loadComponent: () => import('./example-centering/example-centering.component')
  },
  {
    path: 'example-sandbox',
    title: 'Holy Grail Layout',
    data: {
      teaser: 'Some Assembly Required'
    },
    loadComponent: () => import('./example-sandbox/example-sandbox.component')
  },
  {
    path: 'example-blocks',
    title: 'Blocks',
    data: {
      teaser: 'Playing With Blocks'
    },
    loadComponent: () => import('./example-blocks/example-blocks.component')
  },
  {
    path: 'example-debugging',
    title: 'Debugging',
    data: {
      teaser: 'Good Grids Gone Bad'
    },
    loadComponent: () => import('./example-debugging/example-debugging.component')
  },
  {
    path: 'example-image-gallery',
    title: 'Image Gallery',
    data: {
      teaser: 'Ooooh Pretty'
    },
    loadComponent: () => import('./example-image-gallery/example-image-gallery.component')
  },
  {
    path: 'example-playing-cards',
    title: 'Playing Cards',
    data: {
      teaser: 'Playing With a Full Deck'
    },
    loadComponent: () => import('./example-playing-cards/example-playing-cards.component')
  },
  {
    path: 'example-spanning',
    title: 'Spanning',
    data: {
      teaser: 'It\'s All Going According to Span'
    },
    loadComponent: () => import('./example-spanning/example-spanning.component')
  },
  {
    path: 'example-overlap',
    title: 'Overlap',
    data: {
      teaser: 'When Worlds Collide'
    },
    loadComponent: () => import('./example-overlap/example-overlap.component')
  },
  {
    path: 'example-forms',
    title: 'Forms',
    data: {
      teaser: 'Plato Would be Proud'
    },
    loadComponent: () => import('./example-forms/example-forms.component')
  },
  {
    path: 'example-media-objects',
    title: 'Media Objects',
    data: {
      teaser: 'I Object!'
    },
    loadComponent: () => import('./example-media-objects/example-media-objects.component')
  },
  {
    path: 'example-chessboard',
    title: 'Chessboard',
    data: {
      teaser: 'The Grid of Kings'
    },
    loadComponent: () => import('./example-chessboard/example-chessboard.component')
  },
  {
    path: 'example-transform',
    title: 'Transform',
    data: {
      teaser: 'I Want to Break Free'
    },
    loadComponent: () => import('./example-transform/example-transform.component')
  },
  {
    path: 'example-full-viewport',
    title: 'Full Viewport',
    data: {
      teaser: 'So Much Room for Activities!'
    },
    loadComponent: () => import('./example-full-viewport/example-full-viewport.component')
  },
  {
    path: 'example-video-viewer',
    title: 'Video Viewer',
    data: {
      teaser: 'And Yet It Moves'
    },
    loadComponent: () => import('./example-video-viewer/example-video-viewer.component')
  },
  {
    path: 'about',
    title: 'About',
    data: {
      teaser: 'Say "What?" Again'
    },
    loadComponent: () => import('./about/about.component')
  },
  {
    path: 'resources',
    title: 'Resources',
    data: {
      teaser: 'And Furthermore'
    },
    loadComponent: () => import('./resources/resources.component')
  }
];

export const APP_ROUTES: SpacewalkRoutes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  ...featureRoutes.map(setNextAndPreviousPaths),

  { path: '**', redirectTo: 'menu' }
];
