import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { VideoPlayerComponent } from '../video-player/video-player.component';
import { VideoListComponent } from '../video-list/video-list.component';
import { SpaceVideosService, SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'example-video-viewer',
  templateUrl: './example-video-viewer.component.html',
  styleUrls: ['./example-video-viewer.component.scss'],
  standalone: true,
  imports: [VideoListComponent, VideoPlayerComponent, AsyncPipe]
})
export class ExampleVideoViewerComponent {
  static label = 'And Yet It Moves';

  currentVideo?: SpaceVideo;
  videosObservable: Observable<SpaceVideo[]>;

  constructor(svc: SpaceVideosService) {
    this.videosObservable = svc.load();
  }

  setCurrentVideo(v: SpaceVideo) {
    this.currentVideo = v;
  }
}
