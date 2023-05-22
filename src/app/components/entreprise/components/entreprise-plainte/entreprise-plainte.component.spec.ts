import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisePlainteComponent } from './entreprise-plainte.component';

describe('EntreprisePlainteComponent', () => {
  let component: EntreprisePlainteComponent;
  let fixture: ComponentFixture<EntreprisePlainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisePlainteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreprisePlainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
