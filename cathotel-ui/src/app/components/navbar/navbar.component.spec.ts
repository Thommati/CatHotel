import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MaterialModule } from '../../material/material.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the text "The Cat Hotel"', () => {
    const mtb = fixture.nativeElement.querySelector('mat-toolbar');
    expect(mtb.textContent).toContain('The Cat Hotel');
  });

  it('should have a menu button', () => {
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn.textContent).toContain('menu');
  });
});
