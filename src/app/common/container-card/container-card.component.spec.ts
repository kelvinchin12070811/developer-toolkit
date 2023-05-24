import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardComponent } from './container-card.component';

describe('GeneratorContainerComponent', () => {
  let component: ContainerCardComponent;
  let fixture: ComponentFixture<ContainerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContainerCardComponent],
    });
    fixture = TestBed.createComponent(ContainerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
