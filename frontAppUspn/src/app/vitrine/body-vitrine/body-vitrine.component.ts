import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalChatBotComponent } from '../modal-chat-bot/modal-chat-bot.component';

@Component({
  selector: 'app-body-vitrine',
  templateUrl: './body-vitrine.component.html',
  styleUrls: ['./body-vitrine.component.css']
})
export class BodyVitrineComponent {


  constructor(private modalService : NgbModal)
  {

  }
  openModalForum()
  {
    const modalRef =   this.modalService.open(ModalChatBotComponent, { size: 'xl',centered: true });
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
