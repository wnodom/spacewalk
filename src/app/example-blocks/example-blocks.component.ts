import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'eva-example-blocks',
  templateUrl: './example-blocks.component.html',
  styleUrls: ['./example-blocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor]
})
export default class ExampleBlocksComponent {

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 40; i++) {
      this.labels.push(`${i}`);
    }
  }
}
