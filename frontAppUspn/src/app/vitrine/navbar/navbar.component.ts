import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { SignInComponent } from 'src/app/authentification/sign-in/sign-in.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  enablemodification:boolean=false;
  login :boolean =true;
  adminpanel :boolean = false;
  @Input() modificationwiki:boolean=false;
  @Output() saveversionwikinow = new EventEmitter();

  ngOnInit(): void {
      let id : any = sessionStorage.getItem('id');
      let type : any = sessionStorage.getItem('type');
      if ((id.length >0)&&(type?.length>0))
      {
        this.enablemodification=true
        this.login = false;
      }
      if (type=="admin")
      {
        this.adminpanel=true;
      }
   
  }
  constructor( private router: Router,private modalService : NgbModal)
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
  signOut()
  {
  
    sessionStorage.clear();
    this.router.navigate(["/"]);
    this.enablemodification=false
    this.login = true;
    this.adminpanel=false;
  }
}
