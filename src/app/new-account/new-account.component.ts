import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../service/account.service';
import { LoggingService } from '../service/loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logginSrv: LoggingService,
              private accountSrv: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({ name: accountName, status: accountStatus});
    const acc = {name: accountName, status: accountStatus}
    this.accountSrv.addAccount(acc)

    // console.log('Server \"' + accountName + '\" was added with status: \"' + accountStatus + '\"');
    this.logginSrv.logAdd(acc)
  }
}
