import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';

const imageDir = '/assets/card-faces';

const pips: Record<string, string> = {
  clubs:    '\u2663',
  diamonds: '\u2666',
  hearts:   '\u2665',
  spades:   '\u2660',
};

const rankToNumberOfPips: Record<string, number> = {
  'A' :  1,
  '2' :  2,
  '3' :  3,
  '4' :  4,
  '5' :  5,
  '6' :  6,
  '7' :  7,
  '8' :  8,
  '9' :  9,
  '10': 10,
  'J' :  0,
  'Q' :  0,
  'K' :  0,
};

@Component({
  selector: 'eva-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass, NgIf, NgFor]
})
export class PlayingCardComponent implements OnInit {
  @Input() suit = '';
  @Input() rank = '';

  pip = '';
  designPips: string[] = [];
  cardImageUrl = '';

  ngOnInit() {
    const numPips: number = rankToNumberOfPips[this.rank];

    this.pip = pips[this.suit];

    if (numPips > 0) {
      this.designPips = Array<string>(numPips).fill(this.pip);
    } else {
      this.cardImageUrl = imageDir + '/' + this.rank + '-' + this.suit + '.png';
    }
  }
}
