import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl:'./pipes.component.html',
  styles: [`h2{color:red;};.N{border:5px solid grey;margin:50px}h1{color:orange}`]
})
export class PipesComponent implements OnInit {
public firstname="This is a Pipes Name";
public lastname="This a Pipes LastName";
public person={
  "mname":"manthan",
  "cname":"charvi"
}
 dateToday:string;
  constructor() {
    this.dateToday="";
   }


   Person_Details: any[] = [
    {
      Id:1,
      Name: "Jinal",
      Gender: "F"
    },
    {
      Id:2,
      Name: "Arpan",
      Gender: "M"
    },
    {
      Id:3,
      Name: "Hetal",
      Gender: "F"
    },
    {
      Id:4,
      Name: "Roshan",
      Gender: "M"
    },
    {
      Id:5,
      Name: "Pradip",
      Gender: "M"
    }
  ];

  ngOnInit(): void {
    this.dateToday=new Date().toDateString();
  }
}
