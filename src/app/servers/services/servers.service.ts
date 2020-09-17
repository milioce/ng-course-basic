import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Server } from '../server.model';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServersService {
  api = 'http://localhost:3000/servers';

  servers: Server[];

  constructor(private logger: LoggerService, private http: HttpClient) {}

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.api);
  }

  getServer(id: number): Observable<Server> {
    return this.http.get<Server>(this.api + '/' + id);
    /*
    const index = this.findIndexById(id);
    return this.servers[index];
    */
  }

  addServer(server: Server): Observable<Server> {
    // const body = { ...server, started: undefined };
    const body = {
      name: server.name,
      status: server.status,
      instanceType: server.instanceType,
      started: server.started
    };
    return this.http.post<Server>(this.api, body);

    // this.servers.push(server);
  }

  changeStatus(server: Server): Observable<Server> {
    const status = server.status === 'Online' ? 'Offline' : 'Online';

    const body = { status: status };
    return this.http.patch<Server>(this.api + '/' + server.id, body);

    /*
    const index = this.findIndexById(server.id);
    this.servers[index].status = status;
    */
  }

  logNewServer(server: Server) {
    this.logger.logData(server);
  }

  private findIndexById(id): number {
    return this.servers.findIndex(item => item.id === id);
  }
}
