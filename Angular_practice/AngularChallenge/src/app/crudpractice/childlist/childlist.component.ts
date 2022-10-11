import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CrudserviceService } from '../service/crudservice.service';

@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.scss']
})
export class ChildlistComponent implements OnInit {
  @Input() table: any;
 // @Output() newchanges = new EventEmitter<string>();
  public form: any;

  constructor(private service: CrudserviceService,private router:Router) {
    this.table = [];
    this.form = [];
  }

  ngOnInit(): void {
    this.getDataDetails();
  }
  // onEdit(items: any) {
  //   this.newchanges.emit(items);
  // }


  // DELETE ASSESSMENT
  // onDelete(items: any) {
  //   this.table.splice(items, 1);
  // }


  // Get Method
  getDataDetails() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.table = response;
    });
  }

  // DELETE METHOD
  onDelete(id: any) {
    this.service.deleteData(id).subscribe((response) => {
      this.getDataDetails();
    });
  }

//EDIT METHOD
onEdit(data:any){
 this.router.navigate(['crudpractice/edit/',data.id]); 
}

}

