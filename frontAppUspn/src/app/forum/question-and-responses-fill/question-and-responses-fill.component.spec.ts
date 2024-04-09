import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAndResponsesFillComponent } from './question-and-responses-fill.component';

describe('QuestionAndResponsesFillComponent', () => {
  let component: QuestionAndResponsesFillComponent;
  let fixture: ComponentFixture<QuestionAndResponsesFillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionAndResponsesFillComponent]
    });
    fixture = TestBed.createComponent(QuestionAndResponsesFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
