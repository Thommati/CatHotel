import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  // Used for mocking the injected Router
  let routerService;
  let routerServiceStub: Partial<Router>;

  beforeEach(async () => {
    // Used for the injected Router
    routerServiceStub = {
      url: '/cows'
    };

    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      // Used to inject the mockup of Router instead of a real Angular Router service.
      providers: [ { provide: Router, useValue: routerServiceStub } ] // mocking the Router dependency
      // providers: [ { provide: Router, useValue: jasmine.createSpyObj('Router', ['url']) } ] // This one line could have done it all
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;

    // Used for the injected Router
    routerService = fixture.debugElement.injector.get(Router);
    // routerService = TestBed.inject(Router); /* alternate way to inject the service */

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
