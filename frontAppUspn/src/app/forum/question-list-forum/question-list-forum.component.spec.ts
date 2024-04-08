import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListForumComponent } from './question-list-forum.component';

describe('QuestionListForumComponent', () => {
  let component: QuestionListForumComponent;
  let fixture: ComponentFixture<QuestionListForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionListForumComponent]
    });
    fixture = TestBed.createComponent(QuestionListForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
