import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormsModule, FormControl } from '@angular/forms'
import { UserserviceService } from 'src/app/userservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['h2{color:yellow;font-size:20px;padding:5px;background-color:black;text-align:center}']
})
export class LoginComponent implements OnInit {
  public mainform: FormGroup;
  public isSubmitted: boolean = false;

  // Parent to child
  public empform: any;

  // Service nu
  userdata: any;




  constructor(public fb: FormBuilder, private userService: UserserviceService) {
    this.mainform = new FormGroup('');
    this.empform = [];


  }

  ngOnInit(): void {
    this.mainform = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]],
      gender: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]],
      salary: ['', [Validators.required, Validators.pattern("[0-9]*")]]
    });
    
  }
 
  onSubmit() {
    
   
  }
  onReset() {
    this.mainform.reset();
  }
  onEdit(items: any) {
    this.mainform.patchValue(items);
  }
  // Service nu function
  getEmployeedata() {
    this.userService.getEmployee().subscribe((Response) => {
      this.userdata = Response;
    })
  }




}
