import { storage, Context } from "near-sdk-core";

@nearBindgen
class Player {
  public player: string = "phoenixpulsar.testnet";
  public wins: u32 = 8;
  public points: u32 = 180;

  update(wins: u32, points: u32): void {
    this.wins = wins;
    this.points = points;
  }
}

@nearBindgen
export class Contract {
  private message: string = "hello world";
  public player: Player = new Player();

  // return the string 'hello world'
  helloWorld(): string {
    return this.message;
  }

  // read the given key from account (contract) storage
  read(key: string): string {
    if (isKeyInStorage(key)) {
      return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`;
    } else {
      return `🚫 Key [ ${key} ] not found in storage. ( ${this.storageReport()} )`;
    }
  }

  // write the given value at the given key to account (contract) storage
  @mutateState()
  write(key: string, value: string): string {
    storage.set(key, value);
    return `✅ Data saved. ( ${this.storageReport()} )`;
  }

  @mutateState()
  updatePlayer(wins: u32, points: u32): string {
    this.player.update(wins, points);
    return `✅ Player updated . ( ${this.storageReport()} )`;
  }
  // private helper method used by read() and write() above
  private storageReport(): string {
    return `storage [ ${Context.storageUsage} bytes ]`;
  }
}
