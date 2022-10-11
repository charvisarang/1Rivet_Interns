import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudserviceService } from '../service/crudservice.service';
@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.scss']
})
export class ChildformComponent implements OnInit {
  public mainform: FormGroup;
  public isSubmitted: boolean = false;
  public id: any;
  // Parent to child variable  + Get Data Method
  public form: any;

  constructor(private fb: FormBuilder, private service: CrudserviceService, private activateroute: ActivatedRoute) {
    this.activateroute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.getDataById(this.id);
      }
    })

    this.mainform = new FormGroup('');
    this.form = [];

    this.mainform = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3),]],
      gender: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]],
      salary: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  ngOnInit(): void {
    this.getDataDetails();//Get Data Method
  }
  // Get Method
  getDataDetails() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.form = response;
    });
  }
  public onSubmit() {
    this.isSubmitted = true;
    if (this.mainform.valid) {
      this.form.push(this.mainform.value)
      alert("Data entered succesfully");
      console.log(this.mainform.value)
    }
    else {
      alert("Plz enter the data")
    }
    //Post Method
    this.service.postData(this.mainform.value).subscribe((response) => {
      this.form = response;
      this.getDataDetails();
    });
  }


  onReset() {
    this.isSubmitted = false
    this.mainform.reset();
  }
  // onEdit(items: any) {
  //   this.mainform.patchValue(items);
  // }


  //EDIT METHOD
  updateDataDetails() {
    this.service.updateData(this.mainform.value,this.id).subscribe((response) => {
      this.getDataDetails();
    })
  }

  getDataById(id: any) {
    this.service.getDataById(id).subscribe((response) => {
      this.mainform.patchValue(response);
    })
  }

}


