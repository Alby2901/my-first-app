import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]

})
export class AccountComponent {

  constructor(private logginSrv: LoggingService){}

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('The server \"' + this.account.name + '\" change, new status: \"' + status + '\"');
    const acc = {name: this.account.name, status: this.account.status};
    this.logginSrv.logStatusChange(acc)
  }
}
