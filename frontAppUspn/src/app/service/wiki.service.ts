import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from '../models/Wiki';
import { Item } from '../models/Item';
@Injectable({
  providedIn: 'root'
})
export class WikiService {
   APIWIKI = "http://localhost:8080/api/";
  constructor(private http : HttpClient) { }



  encode(data:any)
  {
    // return btoa(data);
    return data;
  }
  decode(encodeddata:any)
  {
    // return atob(encodeddata);
    return encodeddata;
  }

 

 savewikiversionByID(wiki : Wiki,id : any):Observable<any>
  {
      return this.http.post(this.APIWIKI+"versionWiki/ajouterVersionWiki/"+id,wiki);
  }

  getdernierversionwiki():Observable<any>
  {
    return this.http.get(this.APIWIKI+"versionWiki/firstItemVersionwiki");
  }

  saveItemWiki(item:Item):Observable<any>
  {
      return this.http.post(this.APIWIKI+"itemwiki",item);
  }

  getAllItemWiki():Observable<any>
  {
    return this.http.get(this.APIWIKI+"itemwiki");
  }

  deleteItemWiki(id:any):Observable<any>
  {
    return this.http.delete(this.APIWIKI+"itemwiki/deleteItem/"+id);
  }
 


  getLastVersionWikiByIdItem(idItem : any):Observable<any>
  {
    return this.http.get(this.APIWIKI+"versionWiki/dernierVersionWiki/"+idItem)
  }

}
