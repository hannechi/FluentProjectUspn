import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
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
  passwordError = false;
  emailerror =false;
  usernameError = false;
  constructor(private activeModal: NgbActiveModal,private renderer: Renderer2, private elementRef: ElementRef,private userservice : UserService) { 

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
    let email = SignUpForm.form.value.Email;
    let Passwordagain = SignUpForm.form.value.Passwordagain;
    if (username && password && email && Passwordagain) {
      if (password!=Passwordagain)
      {
          this.passwordError=true;
      }
      else
      {
        this.passwordError=false;
      }
      let user = new User(email,username,password,"student")
      console.dir(user)
      this.userservice.signup(user).subscribe(
        {
          next:(data)=>
            {
              this.emailerror=false;
              this.passwordError=false;
              this.usernameError = false;
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "you are successfully registered",
                showConfirmButton: false,
                timer: 1500
              });

            },
          error:(err)=>
            {
              if (err.error =="Un compte avec cet e-mail existe déjà.")
              {

                this.emailerror=true;
                this.usernameError = false;

              }
              else if (err.error == "Ce nom d'utilisateur est déjà utilisé.")
                {
                  this.usernameError = true;
                  this.emailerror=false;
                }
                else
                {
                  Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something went wrong! try later",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }

            }
        }
      )
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
