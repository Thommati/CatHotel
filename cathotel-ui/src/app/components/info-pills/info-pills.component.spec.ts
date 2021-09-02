import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPillsComponent } from './info-pills.component';

describe('InfoPillsComponent', () => {
  let component: InfoPillsComponent;
  let fixture: ComponentFixture<InfoPillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
