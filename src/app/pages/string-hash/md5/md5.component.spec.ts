import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Md5Component } from './md5.component';

describe('Md5Component', () => {
  let component: Md5Component;
  let fixture: ComponentFixture<Md5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Md5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Md5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
