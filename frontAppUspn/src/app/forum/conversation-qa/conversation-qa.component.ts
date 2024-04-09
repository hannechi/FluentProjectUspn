import { Component, Input, OnInit } from '@angular/core';
import { ForumUspnService } from 'src/app/service/forum-uspn.service';
import Swal from 'sweetalert2'
import * as Editor from 'ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
import { Router } from '@angular/router';

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
  constructor(private serviceforum : ForumUspnService,private route:Router)
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
              console.log(err)
            }
      }
    )
  }
  openModaladdAnswer(idquestion:any,iduser:any)
  {

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
    alert(idanswer)
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
    alert(idquestion)
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
