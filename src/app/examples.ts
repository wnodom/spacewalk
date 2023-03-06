import { CustomRoutes } from './custom-route-types';

export const examples: CustomRoutes = [
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
  }
];
