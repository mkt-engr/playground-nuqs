import { SearchParams } from "nuqs";
import { searchParamsCache } from "./_searchParams";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({ searchParams }: PageProps) {
  const { q: query } = await searchParamsCache.parse(searchParams);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => console.log(e.target.value)}
      />
      <h1>Search Results for {query}</h1>
    </div>
  );
}
