import { Component } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class TourComponent {
  constructor() {}

  // Add more snapshots for things such as veterinarian facilities, cafe, front desk (drop off and pick up)
  // Add a short video tour of the facility or videos for each section in addition to the missing images
  // TODO: Add the missing images that appear at the bottom of the snapshots (snapshot gallery support)
  snapshotData = [
    {
      title: 'Secure Outdoor Spaces',
      image: '/assets/images/leaping-cat.svg',
      altText: 'leaping cat',
      text: `
      Multiple contained outdoor play areas for the cats.
      One large play area for social cats, and many smaller individual areas
      for solo felines.`,
    },
    {
      title: 'Indoor Play Areas',
      image: '/assets/images/yarn-cat.svg',
      altText: 'cat playing with yarn',
      text: `
      For the indoor cats, and the outdoor cats when the weather prohibits outdoor time,
      we have multiple indoor play and exercise area.  Like the outdoor play area, there
      is a large communal area, as well as more private areas for individual cats as
      well as cats that live together.  There are also breakout rooms where our staff
      routinely provide interactive play and affection time with your cats.
      `
    }
  ];
}
