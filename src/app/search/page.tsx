import { Search } from "../_components/Search";
import { searchParamsCache } from "./_searchParams";
import { type SearchParams } from "nuqs/server";
import { fetchProducts } from "./actions/products";

type Props = {
  /** 検索クエリを含む検索パラメータ */
  searchParams: Promise<SearchParams>;
};

/** 検索フォームと検索結果を表示するコンポーネント */
export default async function Page({ searchParams }: Props) {
  const { q } = await searchParamsCache.parse(searchParams);
  const { products } = await fetchProducts({ q });

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
      <h1>&quot;{q}&quot;の検索結果</h1>
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
