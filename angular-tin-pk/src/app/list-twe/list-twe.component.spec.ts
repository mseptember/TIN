import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTweComponent } from './list-twe.component';

describe('ListTweComponent', () => {
  let component: ListTweComponent;
  let fixture: ComponentFixture<ListTweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
