import { Component, Input } from '@angular/core';

@Component({
  selector: 'eva-captioned-image',
  templateUrl: './captioned-image.component.html',
  styleUrls: ['./captioned-image.component.scss'],
  standalone: true
})
export class CaptionedImageComponent {
  @Input() src?: string;
  @Input() caption?: string;
}
