import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'example-blocks',
  templateUrl: './example-blocks.component.html',
  styleUrls: ['./example-blocks.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class ExampleBlocksComponent {
  static label = 'Playing With Blocks';

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 40; i++) {
      this.labels.push(`${i}`);
    }
  }
}
