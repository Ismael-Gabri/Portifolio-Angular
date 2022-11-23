import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierContentComponent } from './carrier-content.component';

describe('CarrierContentComponent', () => {
  let component: CarrierContentComponent;
  let fixture: ComponentFixture<CarrierContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
