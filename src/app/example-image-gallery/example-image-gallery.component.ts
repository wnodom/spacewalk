import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'example-image-gallery',
  templateUrl: './example-image-gallery.component.html',
  styleUrls: ['./example-image-gallery.component.css']
})
export class ExampleImageGalleryComponent {
  static label = 'Ooooh Pretty';

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('planetary-nebulae');
  }
}
