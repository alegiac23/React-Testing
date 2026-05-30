import * as matchers from "@testing-library/jest-dom/matchers";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Welcome from "./Welcome";

expect.extend(matchers);

describe("<Welcome />", () => {
  it("mostra proprietà name", () => {
    const { container } = render(<Welcome name="Alessandro" />);
    expect(container).toHaveTextContent("Welcome, Alessandro");
  });
});
