import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ForumUspnService {
  

  APIQUESTION = "api/question";
  APIANSWER = "api/answer";
  constructor(private http : HttpClient) {
    this.APIANSWER=environment.domain+this.APIANSWER
    this.APIQUESTION=environment.domain+this.APIQUESTION
   }

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
