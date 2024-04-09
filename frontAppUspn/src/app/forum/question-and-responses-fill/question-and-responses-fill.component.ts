import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-and-responses-fill',
  templateUrl: './question-and-responses-fill.component.html',
  styleUrls: ['./question-and-responses-fill.component.css']
})
export class QuestionAndResponsesFillComponent implements OnInit{

  idQuestion=""

  constructor(private activatedroute:ActivatedRoute)
  {

  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      {
        next:(data)=>
        {
         this.idQuestion=data["id"];
        }
      }
    )
  }
}
