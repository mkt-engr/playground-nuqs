import { Product } from "@/app/_types/product";
import { FC } from "react";

type Props = {
  products: Product[];
};

/** 商品の検索結果ーを表示するコンポーネント */
export const Result: FC<Props> = ({ products }) =>
  products.map((product) => {
    return (
      <div key={product.id}>
        <h2>title:{product.title}</h2>
        <p>price:{product.price}</p>
      </div>
    );
  });
