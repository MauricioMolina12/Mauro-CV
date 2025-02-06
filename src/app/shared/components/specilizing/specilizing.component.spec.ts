import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecilizingComponent } from './specilizing.component';

describe('SpecilizingComponent', () => {
  let component: SpecilizingComponent;
  let fixture: ComponentFixture<SpecilizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecilizingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecilizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
