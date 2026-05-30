import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { describe, it } from "vitest";
import { GithubUser } from "./GithubUser";

describe("<GithubUser />", () => {
  it("mostra info utente", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <GithubUser username="billy" />
      </QueryClientProvider>,
    );

    const element = await screen.findByText("billy");
    expect(element).toBeInTheDocument();
  });
});
