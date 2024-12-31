import { Search } from "../_components/Search";
import { searchParamsCache } from "./_searchParams";
import { type SearchParams } from "nuqs/server";
import { fetchProducts } from "./actions/products";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParamsCache.parse(searchParams);
  const { products } = await fetchProducts(q);

  if (products.length === 0) {
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
      {products.map((product) => {
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
