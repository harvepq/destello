import ProductDescription from "@/app/ui/products/product-decription";
import ProductImage from "@/app/ui/products/product-image";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  return (
    <main>
      <ProductImage />
      <p>{slug}</p>
      <ProductDescription />
    </main>
  )
}