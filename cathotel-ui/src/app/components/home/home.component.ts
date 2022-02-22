import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  cardData = [
    {
      title: '24 Hour Service',
      content:
        'Like a regular hotel, The Cat Hotel is available 24-hours a day to dropoff and pickup your pet.',
    },
    {
      title: 'On-site Veterinarian',
      content:
        'We have an on-site veterinarian hospital that provides 24-hour emergency care and can provide regular checkups and care.',
    },
    {
      title: 'Individual Care',
      content:
        'Each animal recieves personalized and individual care depending on their needs - including special-needs animals.',
    },
  ];

  quoteData = [
    {
      name: 'Veronica Zhang',
      avatar: '/assets/images/avatar1.png',
      title: 'Amazing Place!',
      quote: `
      I am constantly traveling for work and always leave my cats in the care of The Cat Hotel.
      The staff are amazing; they treat my cats and I incredibly well.  The cats are always
      relaxed and stress-free when I come home to pick them up, I can tell they have been well
      taken care of.
      `,
    },
    {
      name: 'Alexander MacKenzie',
      title: 'No Better Place',
      avatar: '/assets/images/alexander.png',
      quote: `
      The Cat Hotel is a top-notch facility with truly first-class service!  Other cat-sitting services
      require that you pick up your pet by 18:00 or wait until they open the next day, but not these guys!
      If your flight gets in at 1:00 am? No problem! You can still swing by and pick up your cat on the way
      home without any issues or dirty looks. Also, the live feed that lets you check up on your cat while
      away is fantastic.  Don't waste your time with other guys, go to The Cat Hotel - you will not regret it.
      `
    },
  ];

  onBookedClicked(): void {
    // TODO: Implement button to navigate to booking page once it exists.
    console.log('onBookClicked.  Please implement me');
  }
}
