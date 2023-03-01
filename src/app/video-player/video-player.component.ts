import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

  private _video?: SpaceVideo;

  videoUrl?: SafeUrl;

  // Create a trusted version of the video URL each time
  // the input video changes.
  //
  @Input() set video(value: SpaceVideo | undefined) {
    this._video = value;
    if (value?.videoUrl) {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        value.videoUrl
      );
    }
  }

  get video() { return this._video; }

  constructor(private domSanitizer: DomSanitizer) { }
}
