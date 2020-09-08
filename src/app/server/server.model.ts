export class Server {
  constructor(
    public name: string,
    public id: number,
    public status: string,
    public instanceType: string,
    public started: Date = null
  ) {
    if (!started) {
      this.started = new Date();
    }
  }
}
