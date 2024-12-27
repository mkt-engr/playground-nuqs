"use client";

import { useQueryState } from "nuqs";
import { Result } from "../Result";

export const Search = () => {
  const [query, setQuery] = useQueryState("query", { defaultValue: "" });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <h1>Search Results for {query}</h1>
      <Result query={query} />
    </div>
  );
};
