import { storage, Context } from "near-sdk-core";
import { XCC_GAS, POOL_TICKET_PRICE, AccountId, asNEAR } from "../../utils";

@nearBindgen
class Player {
  public player: AccountId | null = null;
  public wins: u64;
  public points: u64;

  constructor(player: string, wins: u64, points: u64) {
    this.player = player;
    this.wins = wins;
    this.points = points;
  }

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
  public scores: Array<Player> = [];

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
  addPlayerScores(player: string, wins: u64, points: u64): void {
    // TODO prevent from adding same player twice logic
    let playerToAdd = new Player(player, wins, points);
    // TODO not sure we can use es6
    //this.scores = [...this.scores, playerToAdd];
    this.scores.push(playerToAdd);
  }

  @mutateState()
  updatePlayerScore(player: string, wins: u64, points: u64): void {
    for (let i = 0; i < this.scores.length; ++i) {
      if (this.scores[i].player === player) {
        this.scores[i].update(wins, points);
      }
    }
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
