import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'eva-example-overlap',
  templateUrl: './example-overlap.component.html',
  styleUrls: ['./example-overlap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, AsyncPipe]
})
export default class ExampleOverlapComponent {

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('planets');
  }
}
