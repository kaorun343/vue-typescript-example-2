export class Message {
  public date = Date.now()
  constructor(
    public title: string,
    public body: string
  ) { }
}

export default class Store {
  constructor(
    public messages: Message[] = []
  ) { }
}
