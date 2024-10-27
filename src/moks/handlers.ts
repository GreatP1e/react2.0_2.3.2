import { http, HttpResponse } from "msw";
import { baseUrl } from "../constants/api";
import { response } from "./response";

export const handlers = [
  http.get(baseUrl + "/*", () => {
    return HttpResponse.json(response);
  }),
];
