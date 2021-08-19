import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';

import { TestimonialComponent } from './testimonial.component';

describe('TestimonialComponent', () => {
  let component: TestimonialComponent;
  let fixture: ComponentFixture<TestimonialComponent>;
  let testimonialDebug: DebugElement;
  let testimonialElement: any;
  let quoteData: { name: string, avatar: string, title: string, quote: string };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ TestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialComponent);
    component = fixture.componentInstance;

    testimonialDebug = fixture.debugElement.query(
      By.css('.testimonial-card')
    );
    testimonialElement = testimonialDebug.nativeElement;

    quoteData = {
      name: 'Darcy',
      avatar: 'url',
      title: 'The Title',
      quote: 'Quote content',
    };

    component.quoteData = quoteData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update quoteData with Input from parent', () => {
    const expectedQuoteData = quoteData;
    expect(component.quoteData).toEqual(expectedQuoteData);
  });

  it('should display the title', () => {
    const expectedTitle = quoteData.title;
    expect(testimonialElement.textContent).toContain(expectedTitle);
  });

  it('should display the name of the quote author', () => {
    const expectedName = quoteData.name;
    expect(testimonialElement.textContent).toContain(expectedName);
  });

  it('should display the quote content text', () => {
    const expectedText = quoteData.quote;
    expect(testimonialElement.textContent).toContain(expectedText);
  });

  it('should set the image src attribute to "url"', () => {
    const expectedSrc = quoteData.avatar;

    // Get the image element via src attribute
    const imgElement = fixture.debugElement.query(By.css('[src]')).nativeElement;

    // Get the value for the src attribute and split on '/' to create array of path values
    const srcValueArr = imgElement['src'].split('/');

    // Get the last value in the arry and compare to the expected value
    const srcValue = srcValueArr[srcValueArr.length - 1];
    expect(srcValue).toEqual(expectedSrc);
  });
});
