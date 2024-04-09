import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForumUspnService {
  

  APIQUESTION = "http://localhost:8080/api/question";
  constructor(private http : HttpClient) { }

  getallquestions():Observable<any>
  {
    return this.http.get(this.APIQUESTION)
  }

  deleteQuestion(id:any):Observable<any>
  {
    return this.http.delete(this.APIQUESTION+"/"+id);
  }

  addquestion(question:any,id:any):Observable<any>
  {
    return this.http.post(this.APIQUESTION+"/"+id,question);
  }


}
