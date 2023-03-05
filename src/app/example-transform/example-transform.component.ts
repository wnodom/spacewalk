import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable, map } from 'rxjs';

import { CaptionedImageComponent } from '../captioned-image/captioned-image.component';
import { SpaceImagesService, SpaceImage } from '../space-images.service';
import { shuffleArrayInPlace } from '../utils';

@Component({
  selector: 'example-transform',
  templateUrl: './example-transform.component.html',
  styleUrls: ['./example-transform.component.scss'],
  standalone: true,
  imports: [NgFor, CaptionedImageComponent, AsyncPipe]
})
export default class ExampleTransformComponent {

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('women-in-space')
      .pipe(map(data => shuffleArrayInPlace([...data]) as SpaceImage[]))
    ;
  }
}
