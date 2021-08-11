import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  onBookedClicked(): void {
    // TODO: Implement button to navigate to booking page once it exists.
    console.log('onBookClicked.  Please implement me');
  }

  ngOnInit(): void {
  }

}
