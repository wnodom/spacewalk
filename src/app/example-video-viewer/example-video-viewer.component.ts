import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { SpaceVideosService, SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'example-video-viewer',
  templateUrl: './example-video-viewer.component.html',
  styleUrls: ['./example-video-viewer.component.css'],
})
export class ExampleVideoViewerComponent {
  static label = 'And Yet It Moves';

  currentVideo?: SpaceVideo;
  videosObservable: Observable<SpaceVideo[]>;

  constructor(svc: SpaceVideosService) {
    this.videosObservable = svc.load('misc');
  }

  setCurrentVideo(v: SpaceVideo) {
    this.currentVideo = v;
  }
}
