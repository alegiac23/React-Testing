import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Welcome from "./Welcome";

describe("<Welcome />", () => {
  it("mostra proprietà name", () => {
    const { container } = render(<Welcome name="Alessandro" />);
    expect(container).toHaveTextContent("Welcome, Alessandro");
  });
});
