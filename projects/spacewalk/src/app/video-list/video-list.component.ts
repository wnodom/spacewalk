import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() videoData: SpaceVideo[] | undefined;
  @Output() selectVideo = new EventEmitter<SpaceVideo>();

  currentVideo: SpaceVideo | undefined;

  setCurrentVideo(video: SpaceVideo) {
    this.currentVideo = video;
    this.selectVideo.emit(video);
  }
}
