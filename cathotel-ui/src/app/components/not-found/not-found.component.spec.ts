import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let routerService;
  let routerServiceStub: Partial<Router>;

  beforeEach(async () => {
    routerServiceStub = {
      url: '/cows'
    };

    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      providers: [ { provide: Router, useValue: routerServiceStub } ] // mocking the Router dependency
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    routerService = fixture.debugElement.injector.get(Router);
    // routerService = TestBed.inject(Router); /* alternate way to inject the service */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
