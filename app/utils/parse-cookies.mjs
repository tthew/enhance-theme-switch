export function parseCookies(cookies) {
  return new Map(
    cookies?.map((cookie) => {
      const [key, value] = cookie.split("=");
      return [key, value];
    })
  );
}
