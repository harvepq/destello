import ProductDescription from "@/app/ui/products/product-decription";
import ProductImage from "@/app/ui/products/product-image";
import { fetchProductBySlug } from "@/app/lib/data";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = fetchProductBySlug(slug)

  return (
    <main>
      <div className="p-4">
        <button
          className="h-9 w-9 inline-flex justify-center items-center border rounded-full bg-white cursor-pointer border-solid bg-clip-padding shadow-xl"
        >
          <div className="flex items-center px-2 text-[#222222]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '4', overflow: 'visible' }}
            >
              <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
            </svg>
          </div>
        </button>
      </div>
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