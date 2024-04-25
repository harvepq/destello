'use client'

// Nextjs Imports
import { useRouter } from "next/navigation";

// React Imports
import {useState} from 'react'

// Components Imports
import ProductDescription from "@/app/ui/products/product-decription";
import ProductImage from "@/app/ui/products/product-image";

// Data Imports
import { fetchProductBySlug } from "@/app/lib/data";


export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = fetchProductBySlug(slug)

  const route = useRouter()
  const [showImages, setShowImages] = useState(false)

  return (
    <main className="relative">
      <section className={`${showImages?'hidden':'block'}`}>
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
        <ProductImage images={product.images} showImages={showImages} setShowImages={setShowImages} />
        <div className="pt-4 pb-24 px-6">
          <ProductDescription
            title={product.title}
            description={product.description}
            items={product.items}
            itinerary={product.itinerary}
          />
        </div>
        <div className="fixed w-full bottom-0 bg-white">
          <div className="flex justify-between items-center border-t-[1px] border-[#D2D2D2] py-2 px-6">
            <div className="leading-3">
              <h3 className="text-xl">US$ {product.prices.dollars}</h3>
              <span className="block text-[#6D6D6D]">por {product.people} persona</span>
              <h3 className="text-xl">PEN {product.prices.soles}</h3>
            </div>
            <button className="bg-[#052659] text-white text-lg w-32 h-12 rounded-lg">Reservar</button>
          </div>
        </div>
      </section>
      <div
         className={` ${!showImages ? 'hidden' : 'block absolute top-0 left-0 right-0 z-10 w-full'}`}
      >
        <section className=''>
          <div className="sticky top-0 p-4 bg-white">
            <button
              className="h-9 w-9 inline-flex justify-center items-center border rounded-full bg-white cursor-pointer border-solid shadow-xl"
              onClick={() => setShowImages(false)}
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
          <div className="flex flex-col gap-2 bg-white">
            {product.images.map((image) => (
              <picture key={image}>
                <img className="w-full aspect-[3/2] object-cover" src={image} alt="" />
              </picture>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}