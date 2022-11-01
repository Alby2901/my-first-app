import { Injectable } from "@angular/core";

export class CountersService {

  actToInactCnt = 0;
  inactToActCnt = 0;

  incrActToInactCnt(){
    this.actToInactCnt++;
    console.log('CntToInact=> ', this.actToInactCnt)
  }

  incrInactToActCnt(){
    this.inactToActCnt++;
    console.log('CntToAct=> ', this.inactToActCnt)
  }
}
