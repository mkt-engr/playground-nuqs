import { Search } from "../_components/Search";
import { searchParamsCache } from "./_searchParams";
import { type SearchParams } from "nuqs/server";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParamsCache.parse(searchParams);
  console.log({ q });
  const data = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=5`,
    { cache: "no-store" }
  );

  const a = await data.json();

  if (!a.products) {
    return <div>loading...</div>;
  }

  if (a.products.length === 0) {
    console.log(a.products.length);
    return (
      <div>
        <Search />
        <hr />
        <h2>No results found</h2>
      </div>
    );
  }

  return (
    <div>
      <Search />
      <hr />
      {a.products.map((product) => {
        return (
          <div key={product.id}>
            <h2>title:{product.title}</h2>
            <p>price:{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}
