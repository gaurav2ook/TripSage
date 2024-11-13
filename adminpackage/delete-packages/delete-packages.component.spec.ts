import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePackagesComponent } from './delete-packages.component';

describe('DeletePackagesComponent', () => {
  let component: DeletePackagesComponent;
  let fixture: ComponentFixture<DeletePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
