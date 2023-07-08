import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDialogueComponent } from './note-dialogue.component';

describe('NoteDialogueComponent', () => {
  let component: NoteDialogueComponent;
  let fixture: ComponentFixture<NoteDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
