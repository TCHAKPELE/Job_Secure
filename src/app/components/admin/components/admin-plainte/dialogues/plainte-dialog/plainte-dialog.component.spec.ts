import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainteDialogComponent } from './plainte-dialog.component';

describe('PlainteDialogComponent', () => {
  let component: PlainteDialogComponent;
  let fixture: ComponentFixture<PlainteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
