import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userauth } from '../models/Userauth';
import { User } from '../models/User';
<<<<<<< HEAD
import { environment } from 'src/environments/environment.development';
=======
>>>>>>> 29194d2f8ce71a48bf35d96902922a1e7720e111


@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  APIUSER = "api/user";

 constructor(private http : HttpClient) {
    this.APIUSER=environment.domain+this.APIUSER;
   }
=======
  APIUSER = "http://localhost:8080/api/user";
  constructor(private http : HttpClient) { }

>>>>>>> 29194d2f8ce71a48bf35d96902922a1e7720e111


  signin(user : Userauth):Observable<any>
  {
      return this.http.post(this.APIUSER+"/SignIn",user);
  }
  signup(user : User):Observable<any>
  {
    return this.http.post(this.APIUSER+"/SignUp",user)
  }
  getallusers():Observable<any>
  {
    return this.http.get(this.APIUSER)
  }
  updatetypeUser(user:User)
  {
    return this.http.put(this.APIUSER+"/updatetype/"+user.id,user);
  }
}
