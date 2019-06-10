import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHotelItemComponent } from './find-hotel-item.component';

describe('FindHotelItemComponent', () => {
  let component: FindHotelItemComponent;
  let fixture: ComponentFixture<FindHotelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHotelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHotelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
