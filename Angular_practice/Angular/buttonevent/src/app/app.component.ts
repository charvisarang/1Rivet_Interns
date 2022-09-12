import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buttonevent';
  

   inputText:string="";
  onSubmit(inputele:HTMLInputElement)
  {
    this.inputText=inputele.value;
  }
}
