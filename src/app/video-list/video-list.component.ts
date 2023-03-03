import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

import { VideoThumbnailComponent } from '../video-thumbnail/video-thumbnail.component';
import { SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  standalone: true,
  imports: [NgFor, VideoThumbnailComponent]
})
export class VideoListComponent {
  @Input() videoData: SpaceVideo[] = [];
  @Output() selectVideo = new EventEmitter<SpaceVideo>();

  currentVideo?: SpaceVideo;

  setCurrentVideo(video: SpaceVideo) {
    this.currentVideo = video;
    this.selectVideo.emit(video);
  }
}
