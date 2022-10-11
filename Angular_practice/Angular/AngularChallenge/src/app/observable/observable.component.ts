import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  // myobserver = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  //   setTimeout(() => {
  //     observer.next(4);
  //     observer.next(5);
  //     observer.complete();
  //   }, 3000);
  //   observer.error(new Error('something goes wrong'));
  // })

  ngOnInit(): void {
    // this.myobserver.subscribe((Response) => {
    //   console.log(Response);
    // },
    //   (errormsg) => { alert(errormsg.message); },
    //   () => { alert('Completed') })
  }

}
