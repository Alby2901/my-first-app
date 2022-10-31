import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loggin.service";

@Injectable({providedIn: 'root'})
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private logginService: LoggingService){}

  statusUpdated = new EventEmitter<string>();

  getAccounts(){
    return this.accounts;
  }

  addAccount(account:{name: string, status: string}){
    this.accounts.push(account);
    // this.logginService.logAdd(account);
  }

  changeStatus(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    // this.logginService.logStatusChange(this.accounts[updateInfo.id])
  }
}
