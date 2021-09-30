import { Pool } from "../assembly";

let pool: Pool;

beforeEach(() => {
  pool = new Pool();
});

describe("Pool", () => {
  // VIEW method tests

  it("reads data", () => {
    expect(pool.read("some key")).toStrictEqual(
      "🚫 Key [ some key ] not found in storage. ( storage [ 0 bytes ] )"
    );
  });

  // CHANGE method tests
  it("saves data to contract storage", () => {
    expect(pool.write("some-key", "some value")).toStrictEqual(
      "✅ Data saved. ( storage [ 18 bytes ] )"
    );
  });
});
