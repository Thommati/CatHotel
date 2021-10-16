import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { InfoPillsComponent } from './components/info-pills/info-pills.component';
import { PillComponent } from './components/pill/pill.component';
import { TourComponent } from './components/tour/tour/tour.component';
import { SnapshotComponent } from './components/tour/snapshot/snapshot.component';
import { LocationComponent } from './components/location/location.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoCardComponent,
    TestimonialComponent,
    FooterComponent,
    AboutComponent,
    InfoPillsComponent,
    PillComponent,
    TourComponent,
    SnapshotComponent,
    LocationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
