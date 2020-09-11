import { Server } from '../server.model';

export class ServersService {
  constructor() {}

  logNewServer(server: Server) {
    console.log(server);
  }
}
