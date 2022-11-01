import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  users: string[];

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.setToActive(id)
  }
}
