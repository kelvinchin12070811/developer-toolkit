import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuidComponent } from './uuid.component';

describe('UuidComponent', () => {
  let component: UuidComponent;
  let fixture: ComponentFixture<UuidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UuidComponent]
    });
    fixture = TestBed.createComponent(UuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
