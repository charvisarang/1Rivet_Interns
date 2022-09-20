import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  public firstname:string;
  public lastname:string;
  public number:any;
  

  constructor() {
    this.firstname="";
    this.lastname="";
   }

  ngOnInit(): void {
   }
   
   onlogin(item:any){
    console.log(item);
   }
}
