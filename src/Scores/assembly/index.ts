import { storage, Context, PersistentMap } from "near-sdk-core";
import { XCC_GAS, POOL_TICKET_PRICE, AccountId, asNEAR } from "../../utils";

@nearBindgen
class PlayerScores {
  constructor(public player: AccountId, public wins: u64, public points: u64) {}
}

// key used to identify project object in storage
const PROJECT_SCORES_KEY = "STATE";

@nearBindgen
export class Contract {
  constructor(
    public playersScores: PersistentMap<
      AccountId,
      PlayerScores
    > = new PersistentMap<AccountId, PlayerScores>("s")
  ) {}

  read(key: string): string {
    if (isKeyInStorage(key)) {
      return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`;
    } else {
      return `🚫 Key [ ${key} ] not found in storage. ( ${this.storageReport()} )`;
    }
  }

  @mutateState()
  write(key: string, value: string): string {
    storage.set(key, value);
    return `✅ Data saved. ( ${this.storageReport()} )`;
  }

  @mutateState()
  addOrUpdatePlayerScores(account: AccountId, wins: u64, points: u64): void {
    add_or_update_player_scores(account, wins, points);
  }

  private storageReport(): string {
    return `storage [ ${Context.storageUsage} bytes ]`;
  }
}

export function add_or_update_player_scores(
  account: AccountId,
  wins: u64,
  points: u64
): void {
  // create a new player score instance
  const newOrUpdatedPlayer = new PlayerScores(account, wins, points);

  // get contract STATE
  const contractScores = get_contract_scores();

  // get current player scores
  const currentPlayersScores = contractScores.playersScores;

  // set or update key val pairs
  currentPlayersScores.set(account, newOrUpdatedPlayer);

  // set playersScore property
  contractScores.playersScores = currentPlayersScores;

  // save contract with new values
  resave_contract_scores(contractScores);
}

export function get_contract_scores(): Contract {
  return storage.getSome<Contract>(PROJECT_SCORES_KEY);
}

export function resave_contract_scores(contract: Contract): void {
  storage.set(PROJECT_SCORES_KEY, contract);
}

/**
 * This function exists only to avoid a compiler error
 * @param key string key in account storage
 * @returns boolean indicating whether key exists
 */
function isKeyInStorage(key: string): bool {
  return storage.hasKey(key);
}
