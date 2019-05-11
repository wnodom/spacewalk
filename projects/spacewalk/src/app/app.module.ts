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

import { examples } from './examples';

@NgModule({
  declarations: [

    examples.map( example => example.component ),

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
