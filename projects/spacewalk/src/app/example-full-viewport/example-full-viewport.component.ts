import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'example-full-viewport',
  templateUrl: './example-full-viewport.component.html',
  styleUrls: ['./example-full-viewport.component.scss']
})
export class ExampleFullViewportComponent {
  static label = 'So Much Room for Activities!';

  title = 'Full-Viewport Application';
  showNav = true;

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('posters');
  }
}
