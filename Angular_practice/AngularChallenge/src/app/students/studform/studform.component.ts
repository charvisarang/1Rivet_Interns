import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-studform',
  templateUrl: './studform.component.html',
  styleUrls: ['./studform.component.scss']
})
export class StudformComponent implements OnInit {
  public isSubmitted: boolean = false;
  public mainform: FormGroup;
  // Parent To Child
  public form: any;


  constructor(private fb: FormBuilder, private service: StudentserviceService) {
    this.mainform = new FormGroup('');
    this.form = [];
  }

  ngOnInit(): void {
    this.mainform = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
    this.getDataDetails();//GET METHOD
  }

  // GET METHOD
  getDataDetails() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.form = response;
    })
  }

  onSubmit() {
    if (this.mainform.valid) {
      this.isSubmitted = true;
      // this.form.push(this.mainform.value)

      // POST METHOD
      this.service.addData(this.mainform.value).subscribe((response) => {
        console.log(response);
        this.form = response;
        this.getDataDetails();
      })
      alert("Data entered successfully")
    }
    else {
      alert('Plzz fill all the records')
    }
    this.isSubmitted = false;
    this.mainform.reset();
  }
  onEdit(items: any) {
    this.mainform.patchValue(items);
  }
}

