import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Q_P_: ',this.route.snapshot.queryParams);
    console.log('F_P_: ',this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (qryParams: Params) => {
        console.log('Q_P_SUB: ', qryParams)
      });
    this.route.fragment.subscribe(
      (frgmtParams) => {
        console.log('F_P_SUB: ',frgmtParams)
      });

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
