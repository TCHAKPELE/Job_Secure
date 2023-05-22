import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlainteComponent } from './admin-plainte.component';

describe('AdminPlainteComponent', () => {
  let component: AdminPlainteComponent;
  let fixture: ComponentFixture<AdminPlainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlainteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPlainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
