import { Component, Input, OnInit } from '@angular/core';
import * as Editor from 'ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
import { Question } from 'src/app/models/Question';
import { DatePipe } from '@angular/common';
import { ForumUspnService } from 'src/app/service/forum-uspn.service';
import Swal from 'sweetalert2';
import { Response } from 'src/app/models/Response';
@Component({
  selector: 'app-modal-update-response',
  templateUrl: './modal-update-response.component.html',
  styleUrls: ['./modal-update-response.component.css']
})
export class ModalUpdateResponseComponent implements OnInit {
  public CustomEditor : any = Editor;
  datawiki="";
  titre="";
  Anonymous:boolean=true;
  @Input() public idanswer :number=-1;

  constructor(private datePipe: DatePipe,private forumservice : ForumUspnService)
  {

  }
  ngOnInit(): void {
      this.forumservice.getAnswerByID(this.idanswer).subscribe
      (
        {
          next:(data)=>
            {
                this.titre=data["titre"]
                this.datawiki=data["contenu"]
         
               
                if(data["anonymous"]=="true")
                  {
                    this.Anonymous=true;
                  }
                  else
                  {
                    this.Anonymous=false;
                  }
           
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
  getFormattedDate(){
    const currentDate = new Date();
    // Format the date as per your requirement
    
    return this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
  }
  updateAnswer(formupdateanswer:any)
  {
    let title = formupdateanswer.form.value.titre;
    let contenu = formupdateanswer.form.value.Description;
 
    let anonymous=""
    if(formupdateanswer.form.value.anonymous==true)
      {
        anonymous="true"
      }
      else
      {
        anonymous="false"
      }
  
    let date = this.getFormattedDate();
    if((date!=null)&&(this.idanswer!=-1))
    {
    var answer:Response= new Response(title,contenu,anonymous,date) 
 
    this.forumservice.updateanswer(answer,this.idanswer).subscribe
    (
      {
        next:(data)=>
          {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Answer updated successfully",
              showConfirmButton: false,
              timer: 1500
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
          }
      }
    )

    }
  
  }
}
