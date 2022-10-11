import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empmodel } from '../empmodel';

@Injectable()
export class EmpserviceService {
  private baseurl: any;
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }
  //GET METHOD
  getData():Observable<empmodel[]>{
    const url=this.baseurl+'emp'
    return this.http.get<empmodel[]>(url);
  }

  // //POST METHOD
  addData(value:empmodel):Observable<empmodel>{
    const url=this.baseurl+'emp';
    return this.http.post<empmodel>(url,value);
  }
  // DELETE METHOD
  deleteData(id:number):Observable<empmodel>{
    const url=this.baseurl+'emp/'+id;
    return this.http.delete<empmodel>(url);
  }
  // UPADTE METHOD
  updateDate(id:number,value:empmodel):Observable<empmodel>{
    const url=this.baseurl+'emp/'+id;
    return this.http.put<empmodel>(url,value);
  }
}
