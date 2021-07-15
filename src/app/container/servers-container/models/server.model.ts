import { lorem } from 'faker';

export class Server {
  public name: string;
  public id: string;
  public status: boolean;
  public description?: string;
  public logs: string;

  constructor(id: string, name: string, description: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.logs = lorem.paragraphs(30);
  }
}
