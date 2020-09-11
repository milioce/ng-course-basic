import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.css']
})

export class ServersComponent implements OnInit, AfterViewInit {
  @ViewChild('pRef', {static: false}) pRef: ElementRef;

  serverName = '';
  servers: Server[] = [
    new Server('Production', 1, 'stable', 'medium'),
    new Server('User database MySQL master', 2, 'stable', 'large'),
    new Server('Stage', 3, 'failed', 'small'),
    new Server('Development', 4, 'initializing', 'small')
  ];

  constructor() {
    setTimeout(() => {
      this.pRef.nativeElement.innerHTML = 'DOM updated successfully accessing with ElementRef!!!';
      this.pRef.nativeElement.setAttribute('style', 'color: red');
      }, 3000);
  }

  ngOnInit() {
    console.log('onInit', this.pRef.nativeElement);
  }

  ngAfterViewInit() {
    console.log('afterViewInit', this.pRef.nativeElement);
  }

  onCreateServer(serverName: string) {
    const server = new Server(serverName, this.servers.length, 'stable', 'medium');
    this.servers.push(server);
  }

  changeServerStatus(server: Server) {
    const status = server.status === 'stable' ? 'failed' : 'stable';
    this.servers[server.id - 1].status = status;
  }

}
