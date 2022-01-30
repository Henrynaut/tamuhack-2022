import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSeatComponent } from './findSeat.component';

describe('FindSeaComponent', () => {
  let component: FindSeatComponent;
  let fixture: ComponentFixture<FindSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSeat
    Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSeat
  Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
