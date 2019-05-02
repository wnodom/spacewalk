import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'example-overlap',
  templateUrl: './example-overlap.component.html',
  styleUrls: ['./example-overlap.component.css']
})
export class ExampleOverlapComponent {
  static label = 'When Worlds Collide';

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('planets');
  }
}
