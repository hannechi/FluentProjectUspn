import { Component, Input } from '@angular/core';
import * as Editor from '../../../../ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
import { Question } from 'src/app/models/Question';
import { DatePipe } from '@angular/common';
import { ForumUspnService } from 'src/app/service/forum-uspn.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-add-question',
  templateUrl: './modal-add-question.component.html',
  styleUrls: ['./modal-add-question.component.css']
})
export class ModalAddQuestionComponent {
  public CustomEditor : any = Editor;
  datawiki="";
  items=[]
  @Input() public iduser :number=-1;

  constructor(private datePipe: DatePipe,private forumservice : ForumUspnService)
  {

  }

  getFormattedDate(){
    const currentDate = new Date();
    // Format the date as per your requirement
    
    return this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
  }
  addquestion(formaddquestion:any)
  {
    let title = formaddquestion.form.value.titre;
    let contenu = formaddquestion.form.value.Description;
    let keywords=[]
    for (const item of formaddquestion.form.value.heywords) {
      keywords.push(item.value)
     
    }
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
    if((date!=null)&&(this.iduser!=-1))
    {
    var question:Question= new Question(title,contenu,anonymous,keywords.join(" "),date) 
    this.forumservice.addquestion(question,this.iduser).subscribe
    (
      {
        next:(data)=>
          {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Question added successfully",
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
