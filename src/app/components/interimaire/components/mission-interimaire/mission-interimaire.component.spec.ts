import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionInterimaireComponent } from './mission-interimaire.component';

describe('MissionInterimaireComponent', () => {
  let component: MissionInterimaireComponent;
  let fixture: ComponentFixture<MissionInterimaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionInterimaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionInterimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
