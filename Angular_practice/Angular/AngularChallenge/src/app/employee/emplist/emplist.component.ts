import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { empmodel } from '../empmodel';
import { EmpserviceService } from '../service/empservice.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {
  @Input() table: any;
  @Output() newchanges = new EventEmitter<empmodel>();

  constructor(private service: EmpserviceService, private router: Router) {
    this.table = [];
  }

  ngOnInit(): void {
    this.getDataDetails();
  }
  // onDelete(items: any) {
  //   this.table.splice(items, 1)
  // }
  onEdit(item: empmodel) {
    this.newchanges.emit(item);
    this.router.navigate(['employee/edit/' + item.id]);

  }

  // GET METHOD
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
  onDetails(items: any) {
    this.router.navigate(['employee/empdetails'], { queryParams: items });
  }
}
