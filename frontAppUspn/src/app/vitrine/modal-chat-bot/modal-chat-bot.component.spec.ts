import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChatBotComponent } from './modal-chat-bot.component';

describe('ModalChatBotComponent', () => {
  let component: ModalChatBotComponent;
  let fixture: ComponentFixture<ModalChatBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalChatBotComponent]
    });
    fixture = TestBed.createComponent(ModalChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
