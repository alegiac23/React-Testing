import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { UncontrolledLogin } from "./UncontrolledForm";

describe("Uncontrolled Form", () => {
  it("mostra email e password in console al submit", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<UncontrolledLogin />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "mypassword",
    });
    consoleSpy.mockRestore();
  });
});
