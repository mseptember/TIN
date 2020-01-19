import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThiComponent } from './list-thi.component';

describe('ListThiComponent', () => {
  let component: ListThiComponent;
  let fixture: ComponentFixture<ListThiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
