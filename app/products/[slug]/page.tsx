import ProductDescription from "@/app/ui/products/product-decription";
import ProductImage from "@/app/ui/products/product-image";
import { fetchProductBySlug } from "@/app/lib/data";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = fetchProductBySlug(slug)
  return (
    <main>
      <ProductImage images={product.images}/>
      <ProductDescription
        title={product.title}
        description={product.description}
        prices={product.prices}
        people= {product.people}
        items={product.items}
        itinerary={product.itinerary}
      />
    </main>
  )
}