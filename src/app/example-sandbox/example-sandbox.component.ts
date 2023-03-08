import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eva-example-sandbox',
  templateUrl: './example-sandbox.component.html',
  styleUrls: ['./example-sandbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export default class ExampleSandboxComponent { }
