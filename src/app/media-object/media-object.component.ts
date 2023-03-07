import { Component, Input } from '@angular/core';

@Component({
  selector: 'eva-media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.scss'],
  standalone: true
})
export class MediaObjectComponent {
  @Input() header?: string;
  @Input() image?: string;
  @Input() description?: string;
}
