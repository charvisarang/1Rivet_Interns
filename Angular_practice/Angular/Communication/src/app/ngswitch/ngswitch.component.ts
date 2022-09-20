import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {
// switchnumber=5;
// public switchcolor:string="red";
// public name:string;

// vishnu sir
// public color:string="";
//   constructor() { 
//   this.name="red";
//   }

public selectcolor:string;
public items:any;
constructor(){
  this.selectcolor="";
}
  ngOnInit(): void {
    this.items=[
      {id:1,name:'orange'},
      {id:2,name:'yellow'},
      {id:3,name:'red'},
      {id:4,name:'blue'},
  
  ]
  }

//   changingcolor(ColorName:string){
// this.color=ColorName;
  }


