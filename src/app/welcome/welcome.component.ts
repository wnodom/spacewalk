import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eva-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export default class WelcomeComponent { }
