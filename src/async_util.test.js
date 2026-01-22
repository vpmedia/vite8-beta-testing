import { test, expect } from "vitest";
import { asyncUtil } from "./async_util";

test("asyncUtil", async () => {
  const result = await asyncUtil();
  expect(result).toBe(true);
});
