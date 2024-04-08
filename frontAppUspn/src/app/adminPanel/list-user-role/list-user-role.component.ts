import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';




@Component({
  selector: 'app-list-user-role',
  templateUrl: './list-user-role.component.html',
  styleUrls: ['./list-user-role.component.css']
})
export class ListUserRoleComponent implements OnInit {

  USERS: User[] = []
  page = 1;
  pageSize = 4;
  collectionSize =0

  users: User[]=[];

  constructor(private service : UserService) { 
    this.refreshusers();
  }
  ngOnInit(): void {
   this.service.getallusers().subscribe(
    {
      next:(data)=>
        {
       
         this.USERS=data
         this.collectionSize=this.USERS.length;
         this.refreshusers()
        }
    }
   )   
  }
  refreshusers() {
    this.users = this.USERS
      .map((user:any, i:any) => ({id: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  transform(user:User)
  {
   if (user.type=="student")
    {
      user.type = "collaborator"
    }
    else if (user.type == "collaborator")
    {
        user.type="student"
    }
    this.service.updatetypeUser(user).subscribe(
      {
        next:(data)=>
          {
            console.log(data)
          },
          error:(err)=>
            {
              console.log(err)
            }
      }
    )
  }
}
