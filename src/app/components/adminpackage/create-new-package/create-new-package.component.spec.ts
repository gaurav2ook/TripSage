import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPackageComponent } from './create-new-package.component';

describe('CreateNewPackageComponent', () => {
  let component: CreateNewPackageComponent;
  let fixture: ComponentFixture<CreateNewPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
