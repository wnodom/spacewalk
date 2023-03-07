import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'eva-example-spanning',
  templateUrl: './example-spanning.component.html',
  styleUrls: ['./example-spanning.component.scss'],
  standalone: true,
  imports: [NgFor, AsyncPipe]
})
export default class ExampleSpanningComponent {

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('planets');
  }
}
