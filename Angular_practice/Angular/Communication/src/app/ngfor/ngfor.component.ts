import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
public flowers=["rose,lily,sunflower,lotus"];
public stud=[
           {id:1,name:"'charvi'"},
           {id:2,name:"'manthan'"}
]
  constructor() { }
  ngOnInit(): void {
  }

}
