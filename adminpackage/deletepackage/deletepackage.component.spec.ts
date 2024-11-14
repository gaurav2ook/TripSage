import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepackageComponent } from './deletepackage.component';

describe('DeletepackageComponent', () => {
  let component: DeletepackageComponent;
  let fixture: ComponentFixture<DeletepackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletepackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
