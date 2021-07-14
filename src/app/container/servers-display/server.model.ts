export class Server {
  public name: string;
  public id: number;
  public status: boolean;
  public description?: string;

  constructor(id: number, name: string, description: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
  }
}
