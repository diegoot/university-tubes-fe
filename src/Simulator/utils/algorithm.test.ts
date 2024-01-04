// sum.test.js
import { expect, test } from "vitest";
import algorithm from "./algorithm";

test("works as expected", () => {
  expect(
    algorithm(
      [
        [117, 123, 163, 199],
        [135, 138, 191, 199],
        [106, 113, 118, 145],
        [112, 116, 123, 179],
      ],
      150
    )
  ).toEqual([8, 4]);
});
