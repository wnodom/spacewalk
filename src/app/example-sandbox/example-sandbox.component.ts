import { Component } from '@angular/core';

@Component({
  selector: 'example-sandbox',
  templateUrl: './example-sandbox.component.html',
  styleUrls: ['./example-sandbox.component.scss'],
  standalone: true
})
export class ExampleSandboxComponent {
  static label = 'Some Assembly Required';
}
