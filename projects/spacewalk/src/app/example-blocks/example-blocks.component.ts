import { Component } from '@angular/core';

@Component({
  selector: 'example-blocks',
  templateUrl: './example-blocks.component.html',
  styleUrls: ['./example-blocks.component.css']
})
export class ExampleBlocksComponent {
  static label = 'Playing With Blocks';

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 10; i++) {
      this.labels.push('' + i);
    }
  }
}
