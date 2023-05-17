import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDialogueComponent } from './fiche-dialogue.component';

describe('FicheDialogueComponent', () => {
  let component: FicheDialogueComponent;
  let fixture: ComponentFixture<FicheDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
