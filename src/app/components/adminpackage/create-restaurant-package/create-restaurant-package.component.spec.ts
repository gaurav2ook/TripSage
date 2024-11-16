import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestaurantPackageComponent } from './create-restaurant-package.component';

describe('CreateRestaurantPackageComponent', () => {
  let component: CreateRestaurantPackageComponent;
  let fixture: ComponentFixture<CreateRestaurantPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRestaurantPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRestaurantPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
