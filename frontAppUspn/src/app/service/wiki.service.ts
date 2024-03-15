import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from '../models/Wiki';
import { Item } from '../models/Item';
@Injectable({
  providedIn: 'root'
})
export class WikiService {

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
      return this.http.post("http://localhost:8080/api/versionWiki/ajouterVersionWiki/"+id,wiki);
  }

  getdernierversionwiki():Observable<any>
  {
    return this.http.get("http://localhost:8080/api/versionWiki/firstItemVersionwiki");
  }

  saveItemWiki(item:Item):Observable<any>
  {
      return this.http.post("http://localhost:8080/api/itemwiki",item);
  }

  getAllItemWiki():Observable<any>
  {
    return this.http.get("http://localhost:8080/api/itemwiki");
  }

  deleteItemWiki(id:any):Observable<any>
  {
    return this.http.delete(" http://localhost:8080/api/itemwiki/deleteItem/"+id);
  }
 


  getLastVersionWikiByIdItem(idItem : any):Observable<any>
  {
    return this.http.get("http://localhost:8080/api/versionWiki/dernierVersionWiki/"+idItem)
  }

}
