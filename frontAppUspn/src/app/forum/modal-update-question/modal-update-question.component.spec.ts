import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateQuestionComponent } from './modal-update-question.component';

describe('ModalUpdateQuestionComponent', () => {
  let component: ModalUpdateQuestionComponent;
  let fixture: ComponentFixture<ModalUpdateQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdateQuestionComponent]
    });
    fixture = TestBed.createComponent(ModalUpdateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
