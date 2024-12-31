"use client";

import { useQueryState } from "nuqs";
import { FormEvent, useCallback } from "react";
import { useFocusRef } from "./hooks/useFocusRef";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" });
  const router = useRouter();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.refresh();
    },
    [router]
  );

  const ref = useFocusRef();

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
      <h1>&quot;{query}&quot;の検索結果</h1>
    </form>
  );
};
