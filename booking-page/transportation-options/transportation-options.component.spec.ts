import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationOptionsComponent } from './transportation-options.component';

describe('TransportationOptionsComponent', () => {
  let component: TransportationOptionsComponent;
  let fixture: ComponentFixture<TransportationOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportationOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
