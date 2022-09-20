import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {
// Declare FormGroup
public reactiveForm: FormGroup;
   
// Declare variable for regular expression
public charecterRegEx: string;
public emailRegEx: string;
public numberRegEx: string;


  constructor(private fb: FormBuilder) {
 // Define variable for regular expression
 this.charecterRegEx = '^[a-zA-Z \-\']+';                
 this.emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
 this.numberRegEx = '^[0-9]*$';

 this.reactiveForm = this.fb.group({
  firstName: ['', [ Validators.required, Validators.minLength(5),Validators.pattern(this.charecterRegEx)]],
  lastName: ['', [ Validators.required, Validators.maxLength(8),Validators.pattern(this.charecterRegEx)]],
  email: ['', [ Validators.required, Validators.pattern(this.emailRegEx)]],
  age : [{ value: 25, disabled: true}],
  phoneNumber: ['', [ Validators.required, Validators.minLength(10),Validators.pattern(this.numberRegEx)]]
});


   }

  ngOnInit(): void {
  }

 
   // Create method for submit form
   addData(): void {
 
     this.reactiveForm.reset();
     alert('SUCCESS!! :-)')
 
   }
 }
 