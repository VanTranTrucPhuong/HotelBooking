import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindedHotelItemComponent } from './finded-hotel-item.component';

describe('FindedHotelItemComponent', () => {
  let component: FindedHotelItemComponent;
  let fixture: ComponentFixture<FindedHotelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindedHotelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindedHotelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
