export class Article {
  constructor(
    // tslint:disable-next-line: variable-name
    public _id: string,
    public title: string,
    public year: number,
    public image: string,
    public date: any,
    public content: string
  ) {}
}
