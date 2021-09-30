import { storage, Context, u128 } from "near-sdk-core";
import { XCC_GAS, POOL_TICKET_PRICE, AccountId, asNEAR } from "../../utils";

@nearBindgen
export class Pool {
  constructor(
    public poolTicketPrice: u128 = POOL_TICKET_PRICE,
    public poolTicketsSold: u128 = u128.Zero,
    public winner: AccountId | null = null,
    public participants: Array<AccountId> = new Array(0)
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

/**
 * == PUBLIC METHODS ================================================
 *
 * The contract's public API.
 */
export function sell_ticket(): void {}
