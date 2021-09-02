import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { InfoCardComponent } from '../info-card/info-card.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { AboutComponent } from '../about/about.component';
import { InfoPillsComponent } from '../info-pills/info-pills.component';
import { PillComponent } from '../pill/pill.component';
import { FooterComponent } from '../footer/footer.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        HomeComponent,
        InfoCardComponent,
        TestimonialComponent,
        AboutComponent,
        InfoPillsComponent,
        PillComponent,
        FooterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render the booking button with the text "Book Your Pet's Vacation"`, () => {
    const expectedButtonText = "Book Your Pet's Vacation";
    const button = fixture.nativeElement.querySelector('.banner button');
    expect(button).toBeDefined();
    expect(button.textContent).toContain(expectedButtonText);
  });

  // TODO: Test the 'Book Your Pet's Vacation' button once it has been implemented
});
