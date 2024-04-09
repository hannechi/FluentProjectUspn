import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from 'src/app/authentification/sign-in/sign-in.component';
import { ForumUspnService } from 'src/app/service/forum-uspn.service';
import Swal from 'sweetalert2';
import { ModalAddQuestionComponent } from '../modal-add-question/modal-add-question.component';

@Component({
  selector: 'app-question-list-forum',
  templateUrl: './question-list-forum.component.html',
  styleUrls: ['./question-list-forum.component.css']
})


export class QuestionListForumComponent implements OnInit {
  iduser:any;
  typeuser:any;
  questionList: any[] = [];
  filteredQuestionList: any[] = [];
  searchForm?: any;

  constructor(private fb: FormBuilder,private Forumservice : ForumUspnService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
    this.typeuser=sessionStorage.getItem('type');
    this.iduser = sessionStorage.getItem('id');
    this.Forumservice.getallquestions().subscribe(
      {
        next:(data)=>
          {
            this.filteredQuestionList=data
            this.questionList=data
          },
        error:(err)=>
          {
            
          }
      }
    )

  }
  filterQuestions(query: string) {
    this.filteredQuestionList = this.questionList.filter(question =>
      question.titre.toLowerCase().includes(query.toLowerCase())
    );
  }

  search() {
    const searchQuery = this.searchForm?.get('searchQuery')?.value;
    this.filterQuestions(searchQuery);
    console.log(this.filteredQuestionList);
    //the second method: calling a service to search to get the questions
  }
  //this function just for test
  showitNow(p:any)
  {
    if(this.typeuser=="admin")
    {
    p.open();
    }
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
        this.Forumservice.deleteQuestion(id).subscribe(
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
  openModalNewQuestion()
  {
    if(this.iduser!=null && this.typeuser!=null)
      {
        const modalRef =   this.modalService.open(ModalAddQuestionComponent, { size: 'xl',centered: true });
        modalRef.componentInstance.iduser = this.iduser;
        modalRef.result.then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
      }
    else
    {SignInComponent
      const modalRef =   this.modalService.open(SignInComponent, { size: 'xl',centered: true });
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  
    }
  }
}
