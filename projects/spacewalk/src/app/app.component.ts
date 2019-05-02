import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { examples } from './examples';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private currentExampleIndex = -1;

  constructor(private router: Router) { }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {

    let destination = '';

    const lastExampleIndex = examples.length - 1;

    switch (event.code) {

      case 'Backquote':
        destination = '/welcome';
        this.currentExampleIndex = -1;
        break;

      case 'Backslash':
        destination = '/menu';
        this.currentExampleIndex = -1;
        break;

      case 'BracketRight':
        this.currentExampleIndex =
          this.currentExampleIndex < lastExampleIndex ?
          this.currentExampleIndex + 1 :
          lastExampleIndex
        ;
        destination = examples[this.currentExampleIndex].path;
        break;

      case 'BracketLeft':
        this.currentExampleIndex =
          this.currentExampleIndex > 0 ?
          this.currentExampleIndex - 1 :
          0
        ;
        destination = examples[this.currentExampleIndex].path;
        break;
    }

    if (destination) {
      this.router.navigate([destination]);
    }
  }
}
