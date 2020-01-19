import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordUserComponent } from './edit-record-user.component';

describe('EditRecordUserComponent', () => {
  let component: EditRecordUserComponent;
  let fixture: ComponentFixture<EditRecordUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecordUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
