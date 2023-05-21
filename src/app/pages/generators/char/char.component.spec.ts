import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharComponent } from './char.component';

describe('CharComponent', () => {
  let component: CharComponent;
  let fixture: ComponentFixture<CharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CharComponent]
    });
    fixture = TestBed.createComponent(CharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
