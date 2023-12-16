import { parseCookies } from "../utils/parse-cookies.mjs";

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const cookies = parseCookies(req.cookies);
  const theme = cookies.get("theme") || "light";

  return {
    json: { theme },
  };
}
