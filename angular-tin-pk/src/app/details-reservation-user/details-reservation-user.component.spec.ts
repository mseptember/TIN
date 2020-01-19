import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReservationUserComponent } from './details-reservation-user.component';

describe('DetailsReservationUserComponent', () => {
  let component: DetailsReservationUserComponent;
  let fixture: ComponentFixture<DetailsReservationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsReservationUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsReservationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
