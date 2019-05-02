import { Component } from '@angular/core';

@Component({
  selector: 'workshop-4',
  templateUrl: './workshop-4.component.html',
  styleUrls: ['./workshop-4.component.css']
})
export class Workshop4Component {

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 5; i++) {
      this.labels.push('' + i);
    }
  }
}
