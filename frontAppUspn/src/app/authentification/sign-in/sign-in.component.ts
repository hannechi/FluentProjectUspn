import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Userauth } from 'src/app/models/Userauth';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  incorrectInfo=false;
 
  constructor(private activeModal: NgbActiveModal,private renderer: Renderer2, private elementRef: ElementRef,private userservice : UserService) { 

  }
  validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  ngOnInit(): void {
 

  }
  signInEvent()
  {
    this.incorrectInfo=false
    const container = this.elementRef.nativeElement.querySelector('.container');
    if (container) {
      this.renderer.removeClass(container, 'sign-up-mode');
    }
  }
  SignUpForm(SignUpForm:NgForm)
  {
    
    let username = SignUpForm.form.value.Username;
    let password = SignUpForm.form.value.Password;
    let email = SignUpForm.form.value.email;
    let Passwordagain = SignUpForm.form.value.Passwordagain;
    if (username != "" && password!="" && email != "" && Passwordagain !="") {
      if (password==Passwordagain)
      {
        alert("hello wolrd")
       if (this.validateEmail(email))
       {
        alert("hello wolrd 2")
       }
      }
    }

   
  }
  SignInForm(SignInForm:NgForm)
  {
     let username = SignInForm.form.value.Username;
    let password = SignInForm.form.value.Password;
    if (username != "" && password!="") {
     let user = new Userauth(username,password);
     this.userservice.signin(user).subscribe(
      {
        next:(data)=>
        {
          sessionStorage.clear();
          sessionStorage.setItem('id', data["id"]);
          sessionStorage.setItem('type', data["type"]);
          this.incorrectInfo=false;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You are successfully logged in",
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(()=>{
            window.location.reload();
          }, 100)
        },
        error:(err)=>
        {
           this.incorrectInfo=true;
        }
      }
     )
    
    }

  }
  signUpEvent()
  {
    const container = this.elementRef.nativeElement.querySelector('.container');
    if (container) {
      this.renderer.addClass(container, 'sign-up-mode');
    }
  } 
  
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  
 


}
