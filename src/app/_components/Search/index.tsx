"use client";

import { useQueryState } from "nuqs";
import { useFocusRef } from "./hooks/useFocusRef";
import { useHandleSubmit } from "./hooks/useHandleSubmit";

export const Search = () => {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" });
  const ref = useFocusRef();
  const handleSubmit = useHandleSubmit();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name="q"
        ref={ref}
      />
      <button type="submit">検索する</button>
    </form>
  );
};
