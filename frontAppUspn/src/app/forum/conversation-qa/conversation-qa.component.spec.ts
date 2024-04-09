import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationQAComponent } from './conversation-qa.component';

describe('ConversationQAComponent', () => {
  let component: ConversationQAComponent;
  let fixture: ComponentFixture<ConversationQAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationQAComponent]
    });
    fixture = TestBed.createComponent(ConversationQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
