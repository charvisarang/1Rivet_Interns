import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.scss']
})
export class StudlistComponent implements OnInit {
  @Input() table: any;
  @Output() newchanges = new EventEmitter();

  constructor(private service: StudentserviceService) {
    this.table = [];
  }

  ngOnInit(): void {
    this.getDataDetails();
  }

  getDataDetails() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.table = response;
    })
  }
  // DELETE METHOD
  onDelete(id: number) {
    this.service.deleteData(id).subscribe((response) => {
      console.log(response);
      this.getDataDetails();
    })
  }
  onEdit(items:any) {
    this.newchanges.emit(items);
  }
}
