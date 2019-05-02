import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'example-spanning',
  templateUrl: './example-spanning.component.html',
  styleUrls: ['./example-spanning.component.css']
})
export class ExampleSpanningComponent {
  static label = 'It\'s All Going According to Span';

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('planets');
  }
}
