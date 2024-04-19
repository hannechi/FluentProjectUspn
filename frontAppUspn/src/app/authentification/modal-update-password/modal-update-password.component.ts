import { Component, Input } from '@angular/core';
import { Password } from 'src/app/models/Password';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-update-password',
  templateUrl: './modal-update-password.component.html',
  styleUrls: ['./modal-update-password.component.css']
})
export class ModalUpdatePasswordComponent {

  constructor(private service:UserService)
  {

  }
  updatepassword(formpassword:any)
  {
   let oldpassword = formpassword.form.value.OldPassword;
   let newpassword = formpassword.form.value.NewPassword;
   let ConfirmNewPassword = formpassword.form.value.ConfirmNewPassword;
   let iduser = sessionStorage.getItem('id');
   if ((newpassword==ConfirmNewPassword)&&(iduser!=undefined))
    {
      let passworduser= new Password(oldpassword,newpassword);
        this.service.updatePasswordUser(passworduser,iduser).subscribe(
          {
            next:(data)=>
              {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Password updated successfully",
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
                    title: "Something went wrong! check your informations",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
          }
        )

    }
    else
    {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong! check your informations",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
