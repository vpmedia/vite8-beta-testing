import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek.js";
import quarterOfYear from "dayjs/plugin/quarterOfYear.js";
import utc from "dayjs/plugin/utc.js";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { TextDecoder, TextEncoder } from "node:util";
import { afterAll, afterEach, beforeAll } from "vitest";

if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder;
}

if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = TextDecoder;
}

dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(quarterOfYear);


export const handlers = [
  http.post("/auth/", () => {
    const response = HttpResponse.json(
      {
        success: true,
      },
      { status: 200 },
    );
    return response;
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
