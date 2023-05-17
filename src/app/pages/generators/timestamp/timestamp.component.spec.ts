import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampComponent } from './timestamp.component';

describe('TimestampComponent', () => {
  let component: TimestampComponent;
  let fixture: ComponentFixture<TimestampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimestampComponent]
    });
    fixture = TestBed.createComponent(TimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
