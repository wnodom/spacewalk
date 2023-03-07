import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { PlayingCardComponent } from '../playing-card/playing-card.component';

@Component({
  selector: 'eva-example-playing-cards',
  templateUrl: './example-playing-cards.component.html',
  styleUrls: ['./example-playing-cards.component.scss'],
  standalone: true,
  imports: [NgFor, PlayingCardComponent]
})
export default class ExamplePlayingCardsComponent {

  suits: string[] = [
    'spades',
    'hearts',
    'clubs',
    'diamonds',
  ];

  ranks: string[] =
    [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];
}
