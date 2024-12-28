"use client";

import { useQueryState } from "nuqs";
import { handleClick } from "./handlers";

export const Search = () => {
  const [query, setQuery] = useQueryState("query", { defaultValue: "" });

  return (
    <form action={}>
      <input type="text" value={query} onChange={handleClick} name="query" />
      <h1>Search Results for {query}</h1>
      <button type="submit">検索</button>
    </form>
  );
};
