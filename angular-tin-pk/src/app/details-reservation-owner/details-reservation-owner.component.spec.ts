import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReservationOwnerComponent } from './details-reservation-owner.component';

describe('DetailsReservationOwnerComponent', () => {
  let component: DetailsReservationOwnerComponent;
  let fixture: ComponentFixture<DetailsReservationOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsReservationOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsReservationOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
