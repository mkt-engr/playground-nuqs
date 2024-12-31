import { z } from "zod";

export const product = {
  products: [
    {
      id: 22,
      title: "Dog Food",
      description:
        "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      category: "groceries",
      price: 10.99,
      discountPercentage: 18.15,
      rating: 2.74,
      stock: 40,
      tags: ["pet supplies", "dog food"],
      sku: "A6QRCH37",
      weight: 2,
      dimensions: {
        width: 29.39,
        height: 29.77,
        depth: 20.54,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Alexander Jones",
          reviewerEmail: "alexander.jones@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Addison Wright",
          reviewerEmail: "addison.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 29,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7957222289508",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    },
  ],
  total: 1,
  skip: 0,
  limit: 1,
};

/** レスポンスのスキーマ */
export const responseDataSchema = z.object({
  products: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      category: z.string(),
      price: z.number(),
      discountPercentage: z.number(),
      rating: z.number(),
      stock: z.number(),
      tags: z.array(z.string()),
      sku: z.string(),
      weight: z.number(),
      dimensions: z.object({
        width: z.number(),
        height: z.number(),
        depth: z.number(),
      }),
      warrantyInformation: z.string(),
      shippingInformation: z.string(),
      availabilityStatus: z.string(),
      reviews: z.array(
        z.object({
          rating: z.number(),
          comment: z.string(),
          date: z.string(),
          reviewerName: z.string(),
          reviewerEmail: z.string(),
        })
      ),
      returnPolicy: z.string(),
      minimumOrderQuantity: z.number(),
      meta: z.object({
        createdAt: z.string(),
        updatedAt: z.string(),
        barcode: z.string(),
        qrCode: z.string(),
      }),
      images: z.array(z.string()),
      thumbnail: z.string(),
    })
  ),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

/** レスポンスの型 */
export type ResponseData = z.infer<typeof responseDataSchema>;
