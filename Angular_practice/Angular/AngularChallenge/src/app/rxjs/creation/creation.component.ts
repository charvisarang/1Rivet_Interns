import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(10, 20, 30)
      .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('the end'),
      });
  }





}
