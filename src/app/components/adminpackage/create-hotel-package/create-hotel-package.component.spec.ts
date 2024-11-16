import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelPackageComponent } from './create-hotel-package.component';

describe('CreateHotelPackageComponent', () => {
  let component: CreateHotelPackageComponent;
  let fixture: ComponentFixture<CreateHotelPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateHotelPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHotelPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
