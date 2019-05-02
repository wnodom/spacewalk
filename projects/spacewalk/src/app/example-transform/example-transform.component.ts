import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

import { shuffleArrayInPlace } from '../utils';

@Component({
  selector: 'example-transform',
  templateUrl: './example-transform.component.html',
  styleUrls: ['./example-transform.component.css']
})
export class ExampleTransformComponent {
  static label = 'I Want to Break Free';

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('women-in-space')
      .pipe(map(data => shuffleArrayInPlace([...data])))
    ;
  }
}
