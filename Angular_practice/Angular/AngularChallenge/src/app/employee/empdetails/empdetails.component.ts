import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { __param } from 'tslib'
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {
  public showquery: any;
  //public productvariety: any; //Filter nu krta che
 // public namesearch:string='';

  constructor(private activaterouter: ActivatedRoute) {
    this.activaterouter.queryParamMap.subscribe((param: any) => { this.showquery = param.params });
    console.log(this.showquery);

    // this.productvariety=[
    //   {id:1,productname:'ABC',price:123,productcampany:'CBA'},
    //   {id:2,productname:'PQR',price:456,productcampany:'RQP'},
    //   {id:3,productname:'LMN',price:789,productcampany:'NML'},
    //   {id:4,productname:'XYZ',price:951,productcampany:'ZYZ'},
    // ]

    
  }

  ngOnInit(): void {
  }
}
