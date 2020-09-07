import { Component, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})

export class ServerComponent {
  serverName = '';
  servers = [
    {
      id: 1,
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017),
      maintenanceCost: 49.90
    },
    {
      id: 2,
      instanceType: 'large',
      name: 'User database',
      status: 'stable',
      started: new Date(15, 1, 2017),
      maintenanceCost: 25.85
    },
    {
      id: 3,
      instanceType: 'small',
      name: 'Stage',
      status: 'failed',
      started: new Date(15, 1, 2017),
      maintenanceCost: 10.00
    },
    {
      id: 4,
      instanceType: 'small',
      name: 'Development',
      status: 'initializing',
      started: new Date(15, 1, 2017),
      maintenanceCost: 10.00
    },
  ];

  constructor() {
  }

  getStatusClass(server) {
    const classes = {
      'stable': 'badge-success',
      'failed': 'badge-danger',
      'initializing': 'badge-warning'
    }

    return classes[server.status];
  }

  trackByFunction(index, item) {
    if (!item) {
      return null;
    }
    return item.id;
  }
}
