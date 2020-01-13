import { Component } from '@angular/core';

@Component({
  selector: 'example-debugging',
  templateUrl: './example-debugging.component.html',
  styleUrls: ['./example-debugging.component.css']
})
export class ExampleDebuggingComponent {
  static label = 'Good Grids Gone Bad';

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 10; i++) {
      this.labels.push('' + i);
    }
  }
}
