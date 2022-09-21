import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenttable',
  templateUrl: './parenttable.component.html',
  styleUrls: ['./parenttable.component.scss']
})
export class ParenttableComponent implements OnInit {
public parent="Mummy";
  constructor() { }

  ngOnInit(): void {
  }

}
