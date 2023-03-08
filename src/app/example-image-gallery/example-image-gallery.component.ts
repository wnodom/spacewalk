import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'eva-example-image-gallery',
  templateUrl: './example-image-gallery.component.html',
  styleUrls: ['./example-image-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, AsyncPipe]
})
export default class ExampleImageGalleryComponent {

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('planetary-nebulae');
  }
}
