import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

const bigStep = 5;
const smallStep = 1;

@Component({
  selector: 'example-chessboard',
  templateUrl: './example-chessboard.component.html',
  styleUrls: ['./example-chessboard.component.scss']
})
export class ExampleChessboardComponent implements OnInit {
  static label = 'The Grid of Kings';

  board: string[][] = Array(8).fill( Array(8).fill('') );
  rotx = 0;
  roty = 0;
  rotz = 0;
  extras = '';
  transformations: SafeStyle | undefined;

  constructor(private sanitizer: DomSanitizer) { }

  calculateTransformations() {
    this.transformations = this.sanitizer.bypassSecurityTrustStyle(
        ' rotateX(' + this.rotx + 'deg) '
      + ' rotateY(' + this.roty + 'deg) '
      + ' rotateZ(' + this.rotz + 'deg) '
    );
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {

    const step = event.shiftKey ? bigStep : smallStep;

    switch (event.code) {

      // Reset everything back to the start state
      //
      case 'Space':
        this.rotx = 0;
        this.roty = 0;
        this.rotz = 0;
        this.extras = '';
        break;

      // Rotate around X, Y, and Z axes, in big or small increments
      //
      case 'ArrowUp':     this.rotx += step;  break;
      case 'ArrowDown':   this.rotx -= step;  break;
      case 'ArrowLeft':   this.roty -= step;  break;
      case 'ArrowRight':  this.roty += step;  break;
      case 'KeyZ':        this.rotz -= step;  break;
      case 'KeyX':        this.rotz += step;  break;

      // Get funky
      //
      case 'KeyD':
        this.extras = this.extras ? '' : 'disco';
        break;
    }

    this.calculateTransformations();
  }

  ngOnInit() {
    this.calculateTransformations();
  }
}
