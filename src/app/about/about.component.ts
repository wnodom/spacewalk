import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eva-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export default class AboutComponent { }
