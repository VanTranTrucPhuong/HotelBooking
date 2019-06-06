import { async, ComponentFixture, TestBed } from 'src/app/templates/navbar-bottom/node_modules/@angular/core/testing';

import { NavbarBottomComponent } from './navbar-bottom.component';

describe('NavbarBottomComponent', () => {
  let component: NavbarBottomComponent;
  let fixture: ComponentFixture<NavbarBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
