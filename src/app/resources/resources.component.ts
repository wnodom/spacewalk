import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eva-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export default class ResourcesComponent { }
