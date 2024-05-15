import Product from "@/app/ui/products/product"
import { fetchProductsAllSlug } from "@/app/lib/data"

export function generateStaticParams() {
  const posts = fetchProductsAllSlug()
  return posts.map((post) => ({
    slug: post
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  return (
    <Product slug={slug} />
  )
}