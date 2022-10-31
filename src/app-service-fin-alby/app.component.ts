import { Component } from '@angular/core';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService],

})
export class AppComponent {

  constructor(private accountSrv: AccountService){}

  accounts = this.accountSrv.getAccounts();

  onAccountAdded(newAccount: {name: string, status: string}) {
    // this.accounts.push(newAccount);
    this.accountSrv.addAccount(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
    // const updInf = updateInfo;
    this.accountSrv.changeStatus(updateInfo)
  }
}
