import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  actToInactCnt = 0;
  inactToActCnt = 0;

  constructor() { }

  setToInactive(id: number) {
    // console.log('InactId=> ', id)
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.actToInactCnt++
    console.log('CntToInact=> ', this.actToInactCnt)
  }

  setToActive(id: number) {
    // console.log('ActId=> ', id)
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactToActCnt++
    console.log('CntToAct=> ', this.inactToActCnt)
  }

}
