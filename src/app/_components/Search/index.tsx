"use client";

import { useQueryState } from "nuqs";
import { FormEvent, useCallback, useEffect, useRef } from "react";
import { useFocusRef } from "./hooks/useFocusRef";

export const Search = () => {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" });

  const handleSubmit = useCallback((e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }, []);

  const ref = useFocusRef();

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name="q"
        ref={ref}
      />
      <button type="submit" onSubmit={handleSubmit}>
        検索
      </button>
      <h1>Search Results for {query}</h1>
    </form>
  );
};
