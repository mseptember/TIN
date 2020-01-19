import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTenComponent } from './list-ten.component';

describe('ListTenComponent', () => {
  let component: ListTenComponent;
  let fixture: ComponentFixture<ListTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
