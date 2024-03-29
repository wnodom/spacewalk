import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgIf } from '@angular/common';

import { SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'eva-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf]
})
export class VideoThumbnailComponent {
  @Input() video?: SpaceVideo;
}
