import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.css']
})
export class MediaObjectComponent {
  @Input() header?: string;
  @Input() image?: string;
  @Input() description?: string;
}
