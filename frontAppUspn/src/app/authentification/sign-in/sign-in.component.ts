import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{


 
  constructor(private activeModal: NgbActiveModal,private renderer: Renderer2, private elementRef: ElementRef) { 

  }
  ngOnInit(): void {
 
  }
  signInEvent()
  {
    
    const container = this.elementRef.nativeElement.querySelector('.container');
    if (container) {
      this.renderer.removeClass(container, 'sign-up-mode');
    }
  }
  SignUpForm(SignUpForm:NgForm)
  {
    console.log(SignUpForm.form.value)
  }
  SignInForm(SignInForm:NgForm)
  {
    console.log(SignInForm.form.value)
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
