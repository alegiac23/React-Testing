import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  http.get("https://api.github.com/users/:username", () => {
    return HttpResponse.json({
      login: "billy",
      id: "billy",
      avatar_url: "",
      bio: "",
    });
  }),
];

export const server = setupServer(...handlers);
