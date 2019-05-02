import { Component, Input } from '@angular/core';

import { SpaceVideo } from '../space-videos.service';

@Component({
  selector: 'video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent {
  @Input() video: SpaceVideo | undefined;
}
