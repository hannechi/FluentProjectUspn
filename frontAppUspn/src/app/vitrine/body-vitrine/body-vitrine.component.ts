import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
   alert("chatBot")
  }
}
