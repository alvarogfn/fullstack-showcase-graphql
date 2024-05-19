export class MalformedError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "MalformedError";
    this.statusCode = 400;
  }
}
