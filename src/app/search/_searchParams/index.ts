import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const searchParamsCache = createSearchParamsCache({
  /** 検索クエリ */
  q: parseAsString.withDefault(""),
});
