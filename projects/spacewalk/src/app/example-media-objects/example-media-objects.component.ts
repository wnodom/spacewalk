import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

import { shuffleArrayInPlace } from '../utils';

@Component({
  selector: 'example-media-objects',
  templateUrl: './example-media-objects.component.html',
  styleUrls: ['./example-media-objects.component.css']
})
export class ExampleMediaObjectsComponent {
  static label = 'I Object!';

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('women-in-astronomy')
      .pipe(
        map(data => shuffleArrayInPlace([...data]))
      )
    ;
  }
}
