import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eva-captioned-image',
  templateUrl: './captioned-image.component.html',
  styleUrls: ['./captioned-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class CaptionedImageComponent {
  @Input() src?: string;
  @Input() caption?: string;
}
