import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { list } from '../crudmodel.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.scss']
})
export class CrudformComponent implements OnInit {
 // public table: any;//1
  public table:list[];//delete (list=modelname)
  public mainform:FormGroup;//2
  
  constructor(private userservice: UserService,private fb:FormBuilder) {
    this.table = [];//1
    this.mainform=new FormGroup('');//2
    this.mainform=fb.group({//2
      id:[''],
      name:[''],
      gender:['']
    })
  }

  ngOnInit(): void {
    this.getEmpData();//1
  }
  // Get Method
  getEmpData() {
    this.userservice.getEmp().subscribe((Response) => {
      console.log(Response);
      this.table = Response;
    })
  }

  //Post Method
  onSubmit(){
    console.log(this.mainform.value)
    this.userservice.postEmp(this.mainform.value).subscribe((Response)=>{
      console.log(Response);
      this.getEmpData();//1
    })
    this.mainform.reset();
  }
  // Delete Method
  onDelete(id:any){
    console.log(id)
    this.userservice.deleteEmp(id).subscribe((Response)=>{
      console.log(Response);
      this.getEmpData();//1
    })
  }
  getEmpbyIDdata(id:number){
    this.userservice.updateEmpbyID(id).subscribe((Response)=>{
      console.log(Response);
    })
  }

  onEdit(items:any){
    this.mainform.patchValue(items);
  }
}
