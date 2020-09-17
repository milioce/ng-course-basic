import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from '../server.model';
import { ServersService } from './servers.service';

@Injectable({ providedIn: 'root' })
export class ServerResolver implements Resolve<Server> {
  constructor(private service: ServersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.service.getServer(+route.params['id']);
  }
}
