export class Server {
  public name: string;
  public id: string;
  public status: boolean;
  public description?: string;

  constructor(id: string, name: string, description: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
  }
}
