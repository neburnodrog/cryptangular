import { Server } from '../models/server.model';

export class ServersService {
  servers: Server[] = [
    new Server('1', 'Testing1', 'Test server 1', Math.random() > 0.5),
    new Server('2', 'Testing2', 'Test server 2', Math.random() > 0.5),
    new Server('3', 'Testing3', 'Test server 3', Math.random() > 0.5),
    new Server('4', 'Testing4', 'Test server 4', Math.random() > 0.5),
    new Server('5', 'Testing5', 'Test server 5', Math.random() > 0.5),
    new Server('6', 'Testing6', 'Test server 6', Math.random() > 0.5),
  ];

  addServer(name: string, description: string, status: boolean) {
    const newServerId = ((serverIds) => {
      for (let i = 1; i < serverIds.length; i++) {
        if (!serverIds.includes(i)) {
          return i;
        }
      }
    })(this.servers.map((server) => parseInt(server.id)));

    this.servers.push(
      new Server(newServerId.toString(), name, description, status)
    );
  }

  updateStatus(server: Server) {
    server.status = !server.status;
  }

  deleteServer(server: Server) {
    const serverIndex = this.servers.findIndex((s) => s === server);
    this.servers.splice(serverIndex, 1);
  }

  getServerById(id: string) {
    return this.servers.find((server) => server.id === id);
  }
}
