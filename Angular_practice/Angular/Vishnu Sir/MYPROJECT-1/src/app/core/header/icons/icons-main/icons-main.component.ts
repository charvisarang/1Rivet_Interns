import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-main',
  templateUrl: './icons-main.component.html',
  styleUrls: ['./icons-main.component.scss']
})
export class IconsMainComponent implements OnInit {
public radio:string;
  constructor() { 
    this.radio="";
  }

  ngOnInit(): void {
  }

}
