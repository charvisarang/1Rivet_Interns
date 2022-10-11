import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { identity, Observable } from 'rxjs';
import { list } from './crudmodel.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseurl: any;
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }

  getEmp(): Observable<any> {
    const url = this.baseurl + 'user'
    return this.http.get(url);
  }
  postEmp(items: any): Observable<any> {
    const url = this.baseurl + 'user'
    return this.http.post(url, items);
  }
  deleteEmp(id:number):Observable<any>{
    const url=this.baseurl+'user/'+id;
    return this.http.delete(url);
  }
  updateEmpbyID(id:number):Observable<any>{
    const url=this.baseurl+'user/'+id;
    return this.http.get(url);
  }
  
  updateEmp(items:list,id:number):Observable<any>{
    const url=this.baseurl+'user/'+id;
    return this.http.put(url,items);
  }
}
