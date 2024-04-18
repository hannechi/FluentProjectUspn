import { Component, Input, OnInit } from '@angular/core';
import { WikiService } from 'src/app/service/wiki.service';
import Swal from 'sweetalert2'
import * as Editor from '../../../../ckeditor5-41.0.0-hx9ric8903g3/build/ckeditor';
@Component({
  selector: 'app-more-information-version-wiki',
  templateUrl: './more-information-version-wiki.component.html',
  styleUrls: ['./more-information-version-wiki.component.css']
})
export class MoreInformationVersionWikiComponent implements OnInit{
  @Input() public id :number=-1;
  public CustomEditor : any = Editor;
  datawiki="";
  constructor(private servicewiki : WikiService)
  {
   
  }
  ngOnInit(): void {
    this.servicewiki.getVersionwikibyid(this.id).subscribe
    (
      {
        next:(data)=>
          {
            this.datawiki=data["contenu"]
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
