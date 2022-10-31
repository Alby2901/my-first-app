import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggingService {
  logStatusChange(account:{name: string, status: string}) {
  //   console.log('The server \"' + account.name + '\" change, new status: \"' + status + '\"');
  // logStatusChange(status: string) {
    console.log('The server \"' + account.name + '\" change, new status: \"' + account.status + '\"');
  }

  logAdd(account:{name: string, status: string}) {
    //   console.log('The server \"' + account.name + '\" change, new status: \"' + status + '\"');
    // logStatusChange(status: string) {
      console.log('The server \"' + account.name + '\" is added with status: \"' + account.status + '\"');
    }

}
