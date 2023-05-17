import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationEnCoursComponent } from './validation-en-cours.component';

describe('ValidationEnCoursComponent', () => {
  let component: ValidationEnCoursComponent;
  let fixture: ComponentFixture<ValidationEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationEnCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
