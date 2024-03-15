import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { WikiService } from 'src/app/service/wiki.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sidebarwiki',
  templateUrl: './sidebarwiki.component.html',
  styleUrls: ['./sidebarwiki.component.css']
})
export class SidebarwikiComponent implements OnInit {
  itemwiki=[]
  @Output() selecteditem = new EventEmitter();
  @Input() enablemodification:boolean=false;
  constructor(private wikiservice : WikiService)
  {

  }
  ngOnInit(): void {
      this.wikiservice.getAllItemWiki().subscribe(
        {
          next:(data)=>
          {
            console.log(data)
            this.itemwiki=data;
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

  chargerContenu(idItem:any)
  {
    this.selecteditem.emit(idItem);
  }

  ajouterItem(item:any)
  {
    if(item.value!="")
    {
    Swal.fire({
      title: "Are you sure?",
      text: "This wiki item will be saved !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!"
    }).then((result) => {
      if (result.isConfirmed) {
         let itemS = new Item(item.value);
         this.wikiservice.saveItemWiki(itemS).subscribe(
          {
            next:(data)=>
            {
              Swal.fire({
                title: "Saved!",
                text: "Your item has been saved.",
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
  deleteItem(iditem:any)
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
        this.wikiservice.deleteItemWiki(iditem).subscribe(
          {
            next:(data)=>
            {
              Swal.fire({

                title: "Deleted!",
                text: "Your Item has been deleted.",
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
