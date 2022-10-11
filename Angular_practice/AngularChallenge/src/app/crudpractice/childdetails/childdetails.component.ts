import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';


@Component({
  selector: 'app-childdetails',
  templateUrl: './childdetails.component.html',
  styleUrls: ['./childdetails.component.scss']
})
export class ChilddetailsComponent implements OnInit {
  public query: any;
  constructor(private activateroute: ActivatedRoute) {
    this.activateroute.queryParamMap.subscribe((param: any) => {
      this.query = param.params
    });
    console.log(this.query);
  }

  ngOnInit(): void {
  }

}
