import { Component, OnInit } from '@angular/core';
import { WikiService } from 'src/app/service/wiki.service';
import Swal from 'sweetalert2'
import * as Editor from 'ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
@Component({
  selector: 'app-all-consulter-wiki',
  templateUrl: './all-consulter-wiki.component.html',
  styleUrls: ['./all-consulter-wiki.component.css']
})
export class AllConsulterWikiComponent implements OnInit {
  public CustomEditor : any = Editor;
  datawiki="";
  formattedDate: any;


  constructor(private servicewiki : WikiService)
  {
   
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
 selectedItem(id:any)
 {
      this.servicewiki.getLastVersionWikiByIdItem(id).subscribe(
        {
          next:(data)=>
          {
            console.log(data)
            this.datawiki= this.servicewiki.decode(data["contenu"]);
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
