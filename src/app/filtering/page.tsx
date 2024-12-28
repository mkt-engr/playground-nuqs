import { SearchParams } from "nuqs";
import { searchParamsCache } from "./_searchParams";
import { Search } from "../_components/Search";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({ searchParams }: PageProps) {
  const { q: query } = await searchParamsCache.parse(searchParams);
  console.log("In SC", { query });

  const data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const a = await data.json();
  console.log(a);
  return (
    <div>
      query:{query}
      <Search />
    </div>
  );
}
