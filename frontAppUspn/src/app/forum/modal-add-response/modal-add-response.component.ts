import { Component, Input, OnInit } from '@angular/core';
import * as Editor from '../../../../ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
import { Question } from 'src/app/models/Question';
import { DatePipe } from '@angular/common';
import { ForumUspnService } from 'src/app/service/forum-uspn.service';
import Swal from 'sweetalert2';
import { Response } from 'src/app/models/Response';
@Component({
  selector: 'app-modal-add-response',
  templateUrl: './modal-add-response.component.html',
  styleUrls: ['./modal-add-response.component.css']
})
export class ModalAddResponseComponent{

  public CustomEditor : any = Editor;
  datawiki="";

  @Input() public iduser :number=-1;
  @Input() public idquestion :number=-1;
  constructor(private datePipe: DatePipe,private forumservice : ForumUspnService)
  {

  }

  getFormattedDate(){
    const currentDate = new Date();
    // Format the date as per your requirement
    
    return this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
  }
  addresponse(formaddquestion:any)
  {
    let title = formaddquestion.form.value.titre;
    let contenu = formaddquestion.form.value.Description;
    let anonymous=""
    if(formaddquestion.form.value.anonymous==true)
      {
        anonymous="true"
      }
      else
      {
        anonymous="false"
      }
  
    let date = this.getFormattedDate();
    if((date!=null)&&(this.iduser!=-1)&&(this.idquestion!=-1))
    {
    var response:Response= new Response(title,contenu,anonymous,date) 
    this.forumservice.addresponse(response,this.iduser,this.idquestion).subscribe
    (
      {
        next:(data)=>
          {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Answer added successfully",
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
