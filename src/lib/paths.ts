/** Canonical trailing-slash path for internal marketing pages. Leaves assets, external URLs, and the site root alone. */
export function withTrailingSlash(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const hashIndex = href.indexOf("#");
  const queryIndex = href.indexOf("?");
  let splitAt = -1;
  if (hashIndex >= 0 && queryIndex >= 0) splitAt = Math.min(hashIndex, queryIndex);
  else if (hashIndex >= 0) splitAt = hashIndex;
  else if (queryIndex >= 0) splitAt = queryIndex;
  const path = splitAt >= 0 ? href.slice(0, splitAt) : href;
  const suffix = splitAt >= 0 ? href.slice(splitAt) : "";
  if (path === "/") return href;
  if (/\.[a-zA-Z0-9]+$/.test(path)) return href;
  const slashed = path.endsWith("/") ? path : `${path}/`;
  return `${slashed}${suffix}`;
}
