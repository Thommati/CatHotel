import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent {
  constructor() { }

  // TODO: Add support for snapshot gallery.
  @Input() title = "";
  @Input() order = 0;
  @Input() imgSrc = "";
  @Input() altText = "";
  @Input() text = "";
}
