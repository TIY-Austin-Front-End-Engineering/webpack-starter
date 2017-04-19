import reducer from "../../app/scripts/reducers/app_reducer.js";
import { assert } from "chai";

describe("maths", () => {
  it("adds 2 + 2", () => {
    assert.equal(4, 2 + 2);
  });
});

describe("app reducer", () => {
  it("should return the initial state", () => {
    assert.deepEqual(reducer(undefined, {}), {});
  });

  it("should handle TEST_REDUCER", () => {
    let expectation = {
      newData: "Run the tests"
    };
    let actual = reducer({}, { type: "TEST_REDUCER", data: "Run the tests" });
    assert.deepEqual(expectation, actual);
  });
});
