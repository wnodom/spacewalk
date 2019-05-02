import { Component } from '@angular/core';

@Component({
  selector: 'example-playing-cards',
  templateUrl: './example-playing-cards.component.html',
  styleUrls: ['./example-playing-cards.component.css']
})
export class ExamplePlayingCardsComponent {
  static label = 'Playing With a Full Deck';

  suits: string[] = [
    'spades',
    'hearts',
    'clubs',
    'diamonds',
  ];

  ranks: string[] =
    [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];
}
