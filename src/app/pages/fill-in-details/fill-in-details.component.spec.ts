import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInDetailsComponent } from './fill-in-details.component';

describe('FillInDetailsComponent', () => {
  let component: FillInDetailsComponent;
  let fixture: ComponentFixture<FillInDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillInDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
