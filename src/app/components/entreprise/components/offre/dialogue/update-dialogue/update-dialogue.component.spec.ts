import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDialogueComponent } from './update-dialogue.component';

describe('UpdateDialogueComponent', () => {
  let component: UpdateDialogueComponent;
  let fixture: ComponentFixture<UpdateDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
