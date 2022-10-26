import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logginSrv: LoggingService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // console.log('Server \"' + accountName + '\" was added with status: \"' + accountStatus + '\"');
    const acc = {name: accountName, status: accountStatus}
    this.logginSrv.logStatusChange(acc)
  }
}
