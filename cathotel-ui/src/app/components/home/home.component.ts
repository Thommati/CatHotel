import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  cardData = [
    {
      title: '24 Hour Service',
      content:
        'Like a regular hotel, The Cat Hotel is available 24-hours a day to dropoff and pickup your pet.',
    },
    {
      title: 'On-site Veterinarian',
      content: 'We have an on-site veterinarian hospital that provides 24-hour emergency care and can provide regular checkups and care.'
    },
    {
      title: 'Individual Care',
      content: 'Each animal recieves personalized and individual care depending on their needs - including special-needs animals.'
    }
  ];

  onBookedClicked(): void {
    // TODO: Implement button to navigate to booking page once it exists.
    console.log('onBookClicked.  Please implement me');
  }

  ngOnInit(): void {}
}
