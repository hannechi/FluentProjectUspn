import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { environment } from 'src/environments/environment.development';
=======
>>>>>>> 29194d2f8ce71a48bf35d96902922a1e7720e111
@Injectable({
  providedIn: 'root'
})
export class ForumUspnService {
  

<<<<<<< HEAD
  APIQUESTION = "api/question";
  APIANSWER = "api/answer";
  constructor(private http : HttpClient) {
    this.APIANSWER=environment.domain+this.APIANSWER
    this.APIQUESTION=environment.domain+this.APIQUESTION
   }
=======
  APIQUESTION = "http://localhost:8080/api/question";
  APIANSWER = "http://localhost:8080/api/answer";
  constructor(private http : HttpClient) { }
>>>>>>> 29194d2f8ce71a48bf35d96902922a1e7720e111

  getallquestions():Observable<any>
  {
    return this.http.get(this.APIQUESTION)
  }
  getQuestionByID(id:any):Observable<any>
  {
    return this.http.get(this.APIQUESTION+"/"+id)
  }
  deleteQuestion(id:any):Observable<any>
  {
    return this.http.delete(this.APIQUESTION+"/"+id);
  }

  addquestion(question:any,id:any):Observable<any>
  {
    return this.http.post(this.APIQUESTION+"/"+id,question);
  }

  updatequestion(question:any,id:any):Observable<any>
  {
    return this.http.put(this.APIQUESTION+"/"+id,question);
  }

  getAnswerByID(id:any):Observable<any>
  {
    return this.http.get(this.APIANSWER+"/"+id)
  }

  deleteAnswer(id:any):Observable<any>
  {
    return this.http.delete(this.APIANSWER+"/"+id);
  }

  addresponse(reponse:any,iduser:any,idquestion:any):Observable<any>
  {
    return this.http.post(this.APIANSWER+"/"+iduser+"/"+idquestion,reponse);
  }

  updateanswer(answer:any,id:any):Observable<any>
  {
    return this.http.put(this.APIANSWER+"/"+id,answer);
  }
 
}
