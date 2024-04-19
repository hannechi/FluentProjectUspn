import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';




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
  deleteuser(id:any)
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
        this.service.deleteuser(id).subscribe(
          {
            next:(data)=>
            {
              Swal.fire({

                title: "Deleted!",
                text: "User has been deleted.",
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
         
            }
          }
        )
       
      }
    });

   
  }
}
