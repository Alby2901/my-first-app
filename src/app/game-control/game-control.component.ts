import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startPressed = new EventEmitter<string>();
  @Output() stopPressed = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickStart(messg: string){
    console.log('Premuto Start');
    this.startPressed.emit(messg)
  }

  onClickStop(messg: string){
    console.log('Premuto stop');
    this.stopPressed.emit(messg)
  }

}
