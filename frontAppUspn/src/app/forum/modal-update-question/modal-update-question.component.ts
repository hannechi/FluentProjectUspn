import { Component, Input, OnInit } from '@angular/core';
import * as Editor from 'ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
import { Question } from 'src/app/models/Question';
import { DatePipe } from '@angular/common';
import { ForumUspnService } from 'src/app/service/forum-uspn.service';
import Swal from 'sweetalert2';
export interface Item
{
  display: String 
  value: String
}
@Component({
  selector: 'app-modal-update-question',
  templateUrl: './modal-update-question.component.html',
  styleUrls: ['./modal-update-question.component.css']
})
export class ModalUpdateQuestionComponent implements OnInit{
  public CustomEditor : any = Editor;
  datawiki="";
  items:Item[]=[];
  titre="";
  Anonymous:boolean=true;
  @Input() public idquestion :number=-1;

  constructor(private datePipe: DatePipe,private forumservice : ForumUspnService)
  {

  }
  ngOnInit(): void {
      this.forumservice.getQuestionByID(this.idquestion).subscribe
      (
        {
          next:(data)=>
            {
                this.titre=data["titre"]
                this.datawiki=data["contenu"]
         
                if(data["keywords"]!=null)
                  {
                    let list = data["keywords"].split(" ");
                    
                    for (const item of list)
                      {
                        console.log(item)
                        let obje = {display: item, value: item}
                        this.items.push(obje)
                      }
                  }
              
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
  updatequestion(formupdatequestion:any)
  {
    let title = formupdatequestion.form.value.titre;
    let contenu = formupdatequestion.form.value.Description;
    let keywords:any[]=[]
 
    for (const item of formupdatequestion.form.value.heywords) {
      keywords.push(item.value)
     
    }
    let anonymous=""
    if(formupdatequestion.form.value.anonymous==true)
      {
        anonymous="true"
      }
      else
      {
        anonymous="false"
      }
  
    let date = this.getFormattedDate();
    if((date!=null)&&(this.idquestion!=-1))
    {
    var question:Question= new Question(title,contenu,anonymous,keywords.join(" "),date) 
 
    this.forumservice.updatequestion(question,this.idquestion).subscribe
    (
      {
        next:(data)=>
          {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Question updated successfully",
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
