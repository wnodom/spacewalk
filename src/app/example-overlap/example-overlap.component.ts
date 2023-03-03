import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'example-overlap',
  templateUrl: './example-overlap.component.html',
  styleUrls: ['./example-overlap.component.scss'],
  standalone: true,
  imports: [NgFor, AsyncPipe]
})
export class ExampleOverlapComponent {
  static label = 'When Worlds Collide';

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('planets');
  }
}
