import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { SignInComponent } from 'src/app/authentification/sign-in/sign-in.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() vitrine :boolean =true;
  @Input() enablemodification:boolean=false;
  @Input() login :boolean =true;
  @Input() modificationwiki:boolean=false;
  @Output() saveversionwikinow = new EventEmitter();
  constructor(private modalService : NgbModal)
  {

  }
  public savewiki():void
  {
      this.saveversionwikinow.emit("save wiki now");
  }
  public signIn():void
  {
    const modalRef =   this.modalService.open(SignInComponent, { size: 'xl',centered: true });
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

  }
}
