import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
//  selector: '[app-servers]',
//  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName='';
  serverCreated=false;
  servers = ['TestServer','TestServer 2'];

  constructor() {
      setTimeout(() => {
          this.allowNewServer=true;
      },2000); //2 seconds
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName (event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
