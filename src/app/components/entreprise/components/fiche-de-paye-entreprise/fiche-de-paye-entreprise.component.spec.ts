/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FicheDePayeEntrepriseComponent } from './fiche-de-paye-entreprise.component';

describe('FicheDePayeEntrepriseComponent', () => {
  let component: FicheDePayeEntrepriseComponent;
  let fixture: ComponentFixture<FicheDePayeEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheDePayeEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDePayeEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
