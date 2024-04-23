'use client'

// Nextjs Imports
import { useRouter } from "next/navigation";

// Components Imports
import ProductDescription from "@/app/ui/products/product-decription";
import ProductImage from "@/app/ui/products/product-image";

// Data Imports
import { fetchProductBySlug } from "@/app/lib/data";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = fetchProductBySlug(slug)

  const route = useRouter()

  return (
    <main className="relative">
      <div className="p-4 absolute z-10">
        <button
          className="h-9 w-9 inline-flex justify-center items-center border rounded-full bg-white cursor-pointer border-solid shadow-xl"
          onClick={() => route.back()}
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
        items={product.items}
        itinerary={product.itinerary}
      />
      <div className="w-full fixed bottom-0 bg-white">
        <div className="flex justify-between items-center border-t-[1px] border-[#D2D2D2] py-2 px-6">
          <div className="leading-3">
            <h3 className="text-xl">US$ {product.prices.dollars}</h3>
            <span className="block text-[#6D6D6D]">por {product.people} persona</span>
            <h3 className="text-xl">PEN {product.prices.soles}</h3>
          </div>
          <button className="bg-[#052659] text-white text-lg w-32 h-12 rounded-lg">Reservar</button>
        </div>
      </div>
    </main>
  )
}