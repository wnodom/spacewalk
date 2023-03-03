import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable, map } from 'rxjs';

import { MediaObjectComponent } from '../media-object/media-object.component';
import { SpaceImagesService, SpaceImage } from '../space-images.service';
import { shuffleArrayInPlace } from '../utils';

@Component({
  selector: 'example-media-objects',
  templateUrl: './example-media-objects.component.html',
  styleUrls: ['./example-media-objects.component.scss'],
  standalone: true,
  imports: [NgFor, MediaObjectComponent, AsyncPipe]
})
export class ExampleMediaObjectsComponent {
  static label = 'I Object!';

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('women-in-astronomy')
      .pipe(
        map(data => shuffleArrayInPlace([...data]) as SpaceImage[])
      )
    ;
  }
}
