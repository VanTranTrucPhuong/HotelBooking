import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindedHotelListComponent } from './finded-hotel-list.component';

describe('FindedHotelListComponent', () => {
  let component: FindedHotelListComponent;
  let fixture: ComponentFixture<FindedHotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindedHotelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindedHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
