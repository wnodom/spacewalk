import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { SpaceVideosService, SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'example-video-viewer',
  templateUrl: './example-video-viewer.component.html',
  styleUrls: ['./example-video-viewer.component.css'],
//  encapsulation: ViewEncapsulation.None
})
export class ExampleVideoViewerComponent {
  static label = 'And Yet It Moves';

  currentVideo: SpaceVideo | undefined;

  videosObservable: Observable<SpaceVideo[]> | undefined;

  setCurrentVideo(v: SpaceVideo) {
    this.currentVideo = v;
  }

  constructor(svc: SpaceVideosService) {
    this.videosObservable = svc.load('misc');
  }
}
