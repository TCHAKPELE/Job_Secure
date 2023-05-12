import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimaireComponent } from './interimaire.component';

describe('InterimaireComponent', () => {
  let component: InterimaireComponent;
  let fixture: ComponentFixture<InterimaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterimaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
