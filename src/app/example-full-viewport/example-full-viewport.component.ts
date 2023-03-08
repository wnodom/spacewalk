import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { SpaceImagesService, SpaceImage } from '../space-images.service';

@Component({
  selector: 'eva-example-full-viewport',
  templateUrl: './example-full-viewport.component.html',
  styleUrls: ['./example-full-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe]
})
export default class ExampleFullViewportComponent {

  title = 'Full-Viewport Application';
  showNav = true;

  imageItems: Observable<SpaceImage[]>;

  constructor(svc: SpaceImagesService) {
    this.imageItems = svc.load('posters');
  }
}
