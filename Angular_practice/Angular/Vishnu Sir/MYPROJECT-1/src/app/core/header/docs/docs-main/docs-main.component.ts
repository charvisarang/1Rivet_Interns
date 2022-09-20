import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-main',
  templateUrl: './docs-main.component.html',
  styleUrls: ['./docs-main.component.scss']
})
export class DocsMainComponent implements OnInit {
public students;
public namesearch:string;
  constructor() { 
    this.namesearch="";
    this.students=[
      {rollno:1,name:'Rozy',city:'Pune',class:'8th'},
      {rollno:2,name:'Pari',city:'Mumbai',class:'7th'},
      {rollno:3,name:'Aashvi',city:'Nashik',class:'9th'},
      {rollno:4,name:'Diya',city:'Banglore',class:'10th'},
      {rollno:5,name:'Yaashi',city:'Pune',class:'9th'},
      {rollno:6,name:'Bani',city:'Surat',class:'7th'},
    ]
  }

  ngOnInit(): void {
  }

}
