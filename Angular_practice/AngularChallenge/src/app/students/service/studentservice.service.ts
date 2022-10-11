import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { studmodel } from '../stud.model';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private baseurl: any;
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }

  // GET METHOD
  getData(): Observable<any> {
    const url = this.baseurl + 'student';
    return this.http.get(url);
  }
  // POST METHOD
  addData(data: studmodel): Observable<any> {
    const url = this.baseurl + 'student';
    return this.http.post(url, data);
  }
  // DELETE METHOD
  deleteData(id:number):Observable<any>{
    const url=this.baseurl+'student/'+id;
    return this.http.delete(url);
  }
}
