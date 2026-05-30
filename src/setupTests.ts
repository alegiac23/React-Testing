import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import { server } from "./Testing3/mockServer.ts";

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
