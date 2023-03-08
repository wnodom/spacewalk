import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eva-media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class MediaObjectComponent {
  @Input() header?: string;
  @Input() image?: string;
  @Input() description?: string;
}
