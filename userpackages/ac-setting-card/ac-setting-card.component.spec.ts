import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSettingCardComponent } from './ac-setting-card.component';

describe('AcSettingCardComponent', () => {
  let component: AcSettingCardComponent;
  let fixture: ComponentFixture<AcSettingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcSettingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcSettingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
