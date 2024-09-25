import { groq } from "next-sanity";
import { client } from "./client";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(_createdAt asc) {
      _id,
      description,
      name,
      "projectImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
      "slug": slug.current
    }`
  );
}

// export async function getSelectedProducts(selectedCategory: string) {
//   return client.fetch(
//     groq`*[_type == "product" && category->name == $selectedCategory] {
//       _id,
//       "categoryName": category->name,
//       description,
//       name,
//       price,
//       "productImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
//       "slug": slug.current
//     }`,
//     { selectedCategory }
//   );
// }
