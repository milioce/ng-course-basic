import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: Server;

  constructor() { }

  getStatusClass(server: Server) {
    const classes = {
      'stable': 'badge-success',
      'failed': 'badge-danger',
      'initializing': 'badge-warning'
    }

    return classes[server.status];
  }

  ngOnInit(): void {
  }

}
