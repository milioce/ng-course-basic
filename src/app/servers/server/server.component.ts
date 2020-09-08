import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  @Output() serverChanged = new EventEmitter<Server>();

  constructor() { }

  getStatusClass(server: Server) {
    const classes = {
      'stable': 'badge-success',
      'failed': 'badge-danger',
      'initializing': 'badge-warning'
    }

    return classes[server.status];
  }

  onChangeStatus() {
    //this.server.status = this.server.status === 'stable' ? 'failed' : 'stable';
    this.serverChanged.emit(this.server);
  }

  ngOnInit(): void {
  }

}
