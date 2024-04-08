import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { WikiService } from 'src/app/service/wiki.service';
import Swal from 'sweetalert2';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

import { MoreInformationVersionWikiComponent } from '../more-information-version-wiki/more-information-version-wiki.component';
@Component({
  selector: 'app-list-item-log',
  templateUrl: './list-item-log.component.html',
  styleUrls: ['./list-item-log.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemLogComponent {
  wikiitems =[]
  nameItem=""
  VERSIONWIKI: any[] = []
  page = 1;
  pageSize = 4;
  collectionSize =0
  versionwikis: any[]=[];
  private offcanvasService = inject(NgbOffcanvas);
  constructor(private wikiservice : WikiService,private modalService:NgbModal)
  {

  }
  openEnd(content: TemplateRef<any>) {
    this.wikiservice.getAllItemWiki().subscribe(
      {
        next:(data)=>
          {
            this.wikiitems=data;
            this.offcanvasService.open(content, { position: 'end' });
          },
        error:(err)=>
          {
            this.offcanvasService.dismiss();
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




  sendData(wikidata:any,nameitem:any)
  {
    this.nameItem = nameitem;
    this.VERSIONWIKI=wikidata;
    this.collectionSize=this.VERSIONWIKI.length;
    this.refreshwikis()
  }  
  
  refreshwikis() {
    this.versionwikis = this.VERSIONWIKI
      .map((version:any, i:any) => ({id: i + 1, ...version}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  showMoreinformation(id:any)
  {
    const modalRef =   this.modalService.open(MoreInformationVersionWikiComponent, { size: 'xl',centered: true });
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}