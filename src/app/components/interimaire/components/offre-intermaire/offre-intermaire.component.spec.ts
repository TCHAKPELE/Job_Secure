import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreIntermaireComponent } from './offre-intermaire.component';

describe('OffreIntermaireComponent', () => {
  let component: OffreIntermaireComponent;
  let fixture: ComponentFixture<OffreIntermaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreIntermaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreIntermaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
