import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startPressed = new EventEmitter<any>();
  @Output() stopPressed = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickStart(){
    console.log('Premuto Start');
    this.startPressed.emit()
  }

  onClickStop(){
    console.log('Premuto Stop');
    this.stopPressed.emit()
  }

}
