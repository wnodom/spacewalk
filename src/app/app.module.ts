import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { CaptionedImageComponent } from './captioned-image/captioned-image.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { ResourcesComponent } from './resources/resources.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { WelcomeComponent } from './welcome/welcome.component';

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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CaptionedImageComponent,
    MainMenuComponent,
    MediaObjectComponent,
    PlayingCardComponent,
    ResourcesComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoThumbnailComponent,
    WelcomeComponent,

    ExampleCenteringComponent,
    ExampleSandboxComponent,
    ExampleBlocksComponent,
    ExampleDebuggingComponent,
    ExampleImageGalleryComponent,
    ExamplePlayingCardsComponent,
    ExampleSpanningComponent,
    ExampleOverlapComponent,
    ExampleFormsComponent,
    ExampleMediaObjectsComponent,
    ExampleChessboardComponent,
    ExampleTransformComponent,
    ExampleFullViewportComponent,
    ExampleVideoViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
