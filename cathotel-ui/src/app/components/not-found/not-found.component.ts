import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) { }

  // TODO: get this from configuration / settings file.
  baseUrl = 'www.thecathotel.com'
  currentUrl = '/';

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

}
