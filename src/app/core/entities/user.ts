export class User {
  constructor(
    public id: number,
    public login: string,
    public name: {
      first: string,
      last: string
    }
  ) {}
}
