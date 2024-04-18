import { Component, Input, OnInit } from '@angular/core';
import { ForumUspnService } from 'src/app/service/forum-uspn.service';
import Swal from 'sweetalert2'
import * as Editor from '../../../../ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from 'src/app/authentification/sign-in/sign-in.component';
import { ModalAddResponseComponent } from '../modal-add-response/modal-add-response.component';
import { ModalUpdateQuestionComponent } from '../modal-update-question/modal-update-question.component';
import { ModalUpdateResponseComponent } from '../modal-update-response/modal-update-response.component';

@Component({
  selector: 'app-conversation-qa',
  templateUrl: './conversation-qa.component.html',
  styleUrls: ['./conversation-qa.component.css']
})
export class ConversationQAComponent implements OnInit {

  @Input() id : any="";
  iduser:any;
  typeuser:any;
  public CustomEditor : any = Editor;
  question : any;
  constructor(private serviceforum : ForumUspnService,private route:Router,private modalService : NgbModal)
  {

  }
  
  ngOnInit(): void {
    this.typeuser=sessionStorage.getItem('type');
    this.iduser = sessionStorage.getItem('id');
    this.serviceforum.getQuestionByID(this.id).subscribe(
      {
        next:(data)=>
          {
            this.question = data;
          },
          error:(err)=>
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
    )
  }
  openModaladdAnswer(idquestion:any,iduser:any)
  {
    if(this.iduser!=null && this.typeuser!=null)
      {
        const modalRef =   this.modalService.open(ModalAddResponseComponent, { size: 'xl',centered: true });
        modalRef.componentInstance.iduser = iduser
        modalRef.componentInstance.idquestion = idquestion
        modalRef.result.then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
      }
    else
    {
      const modalRef =   this.modalService.open(SignInComponent, { size: 'xl',centered: true });
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  
    }
  }
  showitNow(p:any)
  {
    if(this.typeuser=="admin")
    {
    p.open();
    }
  }
  openModalUpdateAnswer(idanswer:any)
  {
    const modalRef =   this.modalService.open(ModalUpdateResponseComponent, { size: 'xl',centered: true });
    modalRef.componentInstance.idanswer = idanswer
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  deleteAnswer(idanswer:any)
  {
      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceforum.deleteAnswer(idanswer).subscribe(
          {
            next:(data)=>
            {
              Swal.fire({

                title: "Deleted!",
                text: "Your question has been deleted.",
                icon: "success"
              });
              setTimeout(()=>{
                window.location.reload();
              }, 100)
         
            },
            error:(err)=>
            {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something went wrong! try later",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(err)
            }
          }
        )
       
      }
    });
  }
  openModalUpdateQuestion(idquestion:any)
  {
    const modalRef =   this.modalService.open(ModalUpdateQuestionComponent, { size: 'xl',centered: true });
    modalRef.componentInstance.idquestion = idquestion
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  deletequestion(id:any)
  {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceforum.deleteQuestion(id).subscribe(
          {
            next:(data)=>
            {
              Swal.fire({

                title: "Deleted!",
                text: "Your question has been deleted.",
                icon: "success"
              });
              const link = ['forum'];
              this.route.navigate(link);
         
            },
            error:(err)=>
            {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something went wrong! try later",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(err)
            }
          }
        )
       
      }
    });

   
 
  }

}
