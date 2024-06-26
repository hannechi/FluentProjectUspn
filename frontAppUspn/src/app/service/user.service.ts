import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userauth } from '../models/Userauth';
import { User } from '../models/User';
import { environment } from 'src/environments/environment.development';
import { UserSignUp } from '../models/UserSignUp';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUSER = "api/user";

 constructor(private http : HttpClient) {
    this.APIUSER=environment.domain+this.APIUSER;
   }


  signin(user : Userauth):Observable<any>
  {
      return this.http.post(this.APIUSER+"/SignIn",user);
  }
  signup(user : UserSignUp):Observable<any>
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
  updatePasswordUser(password:any,id:any)
  {
    return this.http.put(this.APIUSER+"/password/"+id,password);
  }
  deleteuser(id:any)
  {
    return this.http.delete(this.APIUSER+"/delete_user/"+id)
  }
}
