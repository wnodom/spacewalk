import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'eva-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf]
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
