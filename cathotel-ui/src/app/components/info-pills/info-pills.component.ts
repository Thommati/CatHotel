import { Component } from '@angular/core';

@Component({
  selector: 'app-info-pills',
  templateUrl: './info-pills.component.html',
  styleUrls: ['./info-pills.component.scss']
})
export class InfoPillsComponent {
  constructor() { }

  additionalPerks = [
    'Mulit-pet Discounts',
    'Rewards Program',
    'Extend Stay',
    'Live Video Feeds',
    'Daily Updates',
    'Available Medical Insurance',
    'Fully Trained Staff',
    'Complimentary Grooming',
  ];
}
