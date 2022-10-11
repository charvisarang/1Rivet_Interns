import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { crudpractice } from '../crudpractice.model';

@Injectable()
export class CrudserviceService {
private  baseurl: any;
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }
// GET METHOD
  getData(): Observable<any>{
    const url = this.baseurl + 'custdb';
    return this.http.get(url);
  }
  // POST METHOD
  postData(data:crudpractice):Observable<any>{
    const url=this.baseurl+'custdb';
    return this.http.post(url,data);
  }
  //DELETE METHOD
  deleteData(id:number):Observable<any>{
    const url=this.baseurl+'custdb/'+id;
    return this.http.delete(url);
  }
//UPDATE METHOD
updateData(id:number,value:crudpractice):Observable<any>{
  const url=this.baseurl+'custdb/'+id;
  return this.http.put(url,value);
}

//GET METHOD BY ID
getDataById(id:number):Observable<any>{
  const url=this.baseurl+`custdb/${id}`;
  return this.http.get(url);
}







}
