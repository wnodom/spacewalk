import { ExampleBlocksComponent       } from './example-blocks/example-blocks.component';
import { ExampleCenteringComponent    } from './example-centering/example-centering.component';
import { ExampleChessboardComponent   } from './example-chessboard/example-chessboard.component';
import { ExampleDebuggingComponent    } from './example-debugging/example-debugging.component';
import { ExampleFormsComponent        } from './example-forms/example-forms.component';
import { ExampleFullViewportComponent } from './example-full-viewport/example-full-viewport.component';
import { ExampleImageGalleryComponent } from './example-image-gallery/example-image-gallery.component';
import { ExampleMediaObjectsComponent } from './example-media-objects/example-media-objects.component';
import { ExampleOverlapComponent      } from './example-overlap/example-overlap.component';
import { ExamplePlayingCardsComponent } from './example-playing-cards/example-playing-cards.component';
import { ExampleSandboxComponent      } from './example-sandbox/example-sandbox.component';
import { ExampleSpanningComponent     } from './example-spanning/example-spanning.component';
import { ExampleTransformComponent    } from './example-transform/example-transform.component';
import { ExampleVideoViewerComponent  } from './example-video-viewer/example-video-viewer.component';

export const examples = [
  { path: 'example-centering',      component: ExampleCenteringComponent    },
  { path: 'example-sandbox',        component: ExampleSandboxComponent      },
  { path: 'example-blocks',         component: ExampleBlocksComponent       },
  { path: 'example-debugging',      component: ExampleDebuggingComponent    },
  { path: 'example-image-gallery',  component: ExampleImageGalleryComponent },
  { path: 'example-playing-cards',  component: ExamplePlayingCardsComponent },
  { path: 'example-spanning',       component: ExampleSpanningComponent     },
  { path: 'example-overlap',        component: ExampleOverlapComponent      },
  { path: 'example-forms',          component: ExampleFormsComponent        },
  { path: 'example-media-objects',  component: ExampleMediaObjectsComponent },
  { path: 'example-chessboard',     component: ExampleChessboardComponent   },
  { path: 'example-transform',      component: ExampleTransformComponent    },
  { path: 'example-full-viewport',  component: ExampleFullViewportComponent },
  { path: 'example-video-viewer',   component: ExampleVideoViewerComponent  },
];
