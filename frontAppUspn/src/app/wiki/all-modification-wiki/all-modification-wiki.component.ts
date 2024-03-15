import { Component, OnInit } from '@angular/core';
import * as Editor from 'ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
import { Wiki } from 'src/app/models/Wiki';
import { WikiService } from 'src/app/service/wiki.service';
import Swal from 'sweetalert2'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-modification-wiki',
  templateUrl: './all-modification-wiki.component.html',
  styleUrls: ['./all-modification-wiki.component.css']
})
export class AllModificationWikiComponent implements OnInit{
  public CustomEditor : any = Editor;
  datawiki="";
  formattedDate: any;
  idItem = "-1";

  constructor(private servicewiki : WikiService,private datePipe: DatePipe)
  {
   
  }


  getFormattedDate(){
    const currentDate = new Date();
    // Format the date as per your requirement
    
    return this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
  }
 ngOnInit(): void {

    this.servicewiki.getdernierversionwiki().subscribe
    (
      {
        next: (data)=>
        {
            this.datawiki = this.servicewiki.decode(data["contenu"]);     
        },
        error: (errr)=>
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

 saveversionwiki(message:any)
 {
  Swal.fire({
    title: "Are you sure?",
    text: "This version of the wiki will be saved !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, save it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.formattedDate = this.getFormattedDate();
      let wikiversion = new Wiki(0,this.servicewiki.encode(this.datawiki),this.formattedDate);
      if(this.idItem!="")
      {
      this.servicewiki.savewikiversionByID(wikiversion,this.idItem).subscribe(
        {
          next: (data)=>
          {
            Swal.fire({
              title: "Saved!",
              text: "Your file has been saved.",
              icon: "success"
            });    
          },
          error: (errr)=>
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
      
    }
  });
   
 }  
 selectedItem(id:any)
 {
  this.idItem=id;
  this.servicewiki.getLastVersionWikiByIdItem(id).subscribe(
    {
      next:(data)=>
      {
        if(data)
        {
        this.datawiki= this.servicewiki.decode(data["contenu"]);
        }
        else
        {
          this.datawiki="";
        }
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

}
