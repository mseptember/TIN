import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordApartmentComponent } from './edit-record-apartment.component';

describe('EditRecordApartmentComponent', () => {
  let component: EditRecordApartmentComponent;
  let fixture: ComponentFixture<EditRecordApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecordApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
