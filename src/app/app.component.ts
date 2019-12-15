import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber:number[]=[];
  evenNumber:number[]=[];
  calculateOddOrEven(genericNo:number){
    console.log(genericNo);
  if(genericNo%2==1)
    this.oddNumber.push(genericNo);
  else
    this.evenNumber.push(genericNo);
  
  }
}
