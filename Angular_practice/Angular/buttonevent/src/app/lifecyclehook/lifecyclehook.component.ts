import { Component ,Input,OnInit,SimpleChange,DoCheck} from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.scss']
})
export class LifecyclehookComponent implements OnInit {
@Input() value:string="cjdcjsj";
  
constructor() {
    console.log('Constructor Called');
    console.log(this.value);
   }
ngOnChanges(change:SimpleChange){
  console.log('onchanges called');
  console.log(change);

}
  ngOnInit(): void {
    console.log('onInit Called');
    //console.log(this.value);
  }
  ngDoCheck(){
console.log('docheck called');
  }

}
