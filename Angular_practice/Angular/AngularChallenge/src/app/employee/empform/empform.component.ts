import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpserviceService } from '../service/empservice.service';


@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.scss']
})
export class EmpformComponent implements OnInit {
  public form: any;
  public loginform: any;
  public isSubmitted: boolean = false;
  public id: any;

  constructor(private fb: FormBuilder, private service: EmpserviceService, private activateroute: ActivatedRoute) {
    this.form = [];
    this.loginform = new FormGroup('');
    this.activateroute.params.subscribe((res)=>{
      this.id=res['id']
    })
  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.getDataDetails();
  }

  // GET METHOD
  getDataDetails() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.form = response;
    })
  }



  // onSubmit() {
  //   if (this.loginform.valid) {
  //     this.isSubmitted = true;
  //     alert("Data Entered Successfully");
  //     //this.form.push(this.loginform.value)
  //     this.service.addData(this.loginform.value).subscribe((Response) => {
  //       console.log(Response);
  //       this.form = Response;
  //     });
  //     this.getDataDetails();
  //   }
  //   else {
  //     alert("Please Fill All Records");
  //   }
  //   this.isSubmitted = false;
  //   this.loginform.reset();
  //   this.getDataDetails();
  // }


  onSubmit() {
    if (this.loginform.valid) {
      this.isSubmitted = true;
      if (this.id) {
        console.log(this.id)
        this.isSubmitted = false;
        this.service.updateDate(this.id,this.loginform.value).subscribe((response) => {
          this.getDataDetails();
          this.loginform.reset();
        });
      }
      else {
        this.service.addData(this.loginform.value).subscribe((response) => {
          this.getDataDetails();
        })
      }
    }
    this.isSubmitted = false;
    this.loginform.reset();
    this.getDataDetails();
  }
  onEdit(items: any) {
    this.loginform.patchValue(items)
  }
}