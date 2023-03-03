import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
  standalone: true,
  imports: [NgIf]
})
export class VideoThumbnailComponent {
  @Input() video?: SpaceVideo;
}
