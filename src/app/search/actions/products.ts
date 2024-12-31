"use server";

import { ResponseData, responseDataSchema } from "@/app/_types/product";

export const fetchProducts = async (q: string): Promise<ResponseData> => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=5`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = responseDataSchema.safeParse(await response.json());

  if (!result.success) {
    throw new Error("Failed to parse products");
  }

  return result.data;
};