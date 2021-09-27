import { storage, Context } from "near-sdk-core";

@nearBindgen
class Player {
  public player: string = "phoenixpulsar.testnet";
  public wins: u64 = 8;
  public points: u64 = 180;

  update(wins: u64, points: u64): string {
    this.wins = wins;
    this.points = points;
    return `✅ Player updated .${wins}, ${points} ( ${this.storageReport()} )`;
  }

  private storageReport(): string {
    return `storage [ ${Context.storageUsage} bytes ]`;
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
  updatePlayer(wins: u64, points: u64): void {
    this.player.update(wins, points);
  }
  // private helper method used by read() and write() above
  private storageReport(): string {
    return `storage [ ${Context.storageUsage} bytes ]`;
  }
}
/**
 * This function exists only to avoid a compiler error
 *
ERROR TS2339: Property 'contains' does not exist on type 'src/singleton/assembly/index/Contract'.
     return this.contains(key);
                 ~~~~~~~~
 in ~lib/near-sdk-core/storage.ts(119,17)
/Users/sherif/Documents/code/near/_projects/edu.t3/starter--near-sdk-as/node_modules/asbuild/dist/main.js:6
        throw err;
        ^
 * @param key string key in account storage
 * @returns boolean indicating whether key exists
 */
function isKeyInStorage(key: string): bool {
  return storage.hasKey(key);
}
