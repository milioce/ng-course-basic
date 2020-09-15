import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../server.model';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  @Output() serverChanged = new EventEmitter<Server>();

  constructor(private service: ServersService) { }

  getStatusClass(server: Server) {
    const classes = {
      'Online': 'badge-success',
      'Offline': 'badge-danger',
    }

    return classes[server.status];
  }

  onChangeStatus() {
    // this.serverChanged.emit(this.server);
    this.service.changeStatus(this.server);
  }

  ngOnInit(): void {
  }

}
