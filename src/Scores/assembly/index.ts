import { storage, Context, PersistentMap } from "near-sdk-core";
import { XCC_GAS, POOL_TICKET_PRICE, AccountId, asNEAR } from "../../utils";

@nearBindgen
class Player {
  public player: AccountId;
  public wins: u64;
  public points: u64;

  constructor(player: AccountId, wins: u64, points: u64) {
    this.player = player;
    this.wins = wins;
    this.points = points;
  }

  @mutateState()
  update(wins: u64, points: u64): Player {
    this.wins = wins;
    this.points = points;
    return this;
    //return `✅ Player updated .${wins}, ${points} ( ${this.storageReport()} )`;
  }

  private storageReport(): string {
    return `storage [ ${Context.storageUsage} bytes ]`;
  }
}

@nearBindgen
class PlayerScores {
  constructor(public player: AccountId, public wins: u64, public points: u64) {}
}

// key used to identify project object in storage
const PROJECT_SCORES_KEY = "state";

@nearBindgen
export class Contract {
  public scores: Array<Player> = [];

  constructor(
    public playerScores: PersistentMap<
      AccountId,
      PlayerScores
    > = new PersistentMap<AccountId, PlayerScores>("s")
  ) {}

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
  addPlayerScores(player: AccountId, wins: u64, points: u64): void {
    // TODO prevent from adding same player twice logic
    let playerToAdd = new Player(player, wins, points);
    // TODO not sure we can use es6
    //this.scores = [...this.scores, playerToAdd];
    this.scores.push(playerToAdd);
  }

  @mutateState()
  updatePlayerScores(player: AccountId, wins: u64, points: u64): void {
    // long way to make sure we can update state
    for (let i = 0; i < this.scores.length; ++i) {
      if (this.scores[i].player === player) {
        this.scores[i] = this.scores[i].update(wins, points);
      }
    }
  }
  // private helper method used by read() and write() above
  private storageReport(): string {
    return `storage [ ${Context.storageUsage} bytes ]`;
  }
}

export function add_player_scores(
  account: AccountId,
  playerScores: PlayerScores
): void {
  const contractScores = get_contract_scores();
  const currentPlayerScores = contractScores.playerScores;
  currentPlayerScores.set(account, playerScores);
  contractScores.playerScores = currentPlayerScores;
  resave_contract_scores(contractScores);
}

export function get_contract_scores(): Contract {
  return storage.getSome<Contract>(PROJECT_SCORES_KEY);
}

export function resave_contract_scores(contract: Contract) {
  storage.set(PROJECT_SCORES_KEY, contract);
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
