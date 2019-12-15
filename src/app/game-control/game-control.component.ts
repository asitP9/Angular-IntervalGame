import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  i:number;
  interval:any;
  evenNo:number=0;
  oddNo:number=0;
  @Output() noInEvent=new EventEmitter<number>();

  constructor() { 
    this.i=0;
  }

  ngOnInit() {
  }

  startGame(){


    var _this = this;
    _this.i++;
   this.interval= setInterval(function(){ 
      
      _this.noInEvent.emit(_this.i++);
   },1000);
   

  }

  stopGame(){
    
    clearInterval(this.interval);
  }
}
