import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent implements OnInit {
  constructor() { }

  @Input() title = "";
  @Input() order = 0;
  @Input() imgSrc = "";
  @Input() altText = "";
  @Input() text = "";

  ngOnInit(): void {}
}
