import { Component } from '@angular/core';

@Component({
  selector: 'workshop-0',
  templateUrl: './workshop-0.component.html',
  styleUrls: ['./workshop-0.component.css']
})
export class Workshop0Component {

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 5; i++) {
      this.labels.push('' + i);
    }
  }
}
