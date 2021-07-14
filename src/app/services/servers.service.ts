import { Server } from '../container/server.model';

export class ServersService {
  servers: Server[] = [
    new Server(1, 'Testing1', 'Test server 1', Math.random() > 0.5),
  ];

  addServer(server: Server) {
    this.servers.push(server);
  }

  updateStatus(server: Server) {
    server.status = !server.status;
  }

  removeServer(server: Server) {
    const serverIndex = this.servers.findIndex((s) => s === server);
    this.servers.splice(serverIndex, serverIndex + 1);
  }
}
