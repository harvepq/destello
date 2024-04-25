'use client'

// Nextjs Imports
import { useRouter } from "next/navigation";

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
      <div className="w-full">
        <picture>
          <img className="w-full aspect-[3/2] object-cover" src="/products/product2.jpg" alt="" />
        </picture>
      </div>
      <div className="my-4 px-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl mb-6 mt-2 uppercase">Convierte Tu Marca en un Simbolo de la Identidad de tu cliente</h2>
          <div className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur in eros eu pharetra. Vivamus efficitur nisl quis tincidunt posuere. Donec lacinia molestie ornare. Proin sollicitudin urna sed vulputate fermentum. Donec at dapibus purus, non ultricies nunc. Phasellus sagittis magna sit amet orci rutrum condimentum. Praesent in velit eget neque euismod accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur in eros eu pharetra. Vivamus efficitur nisl quis tincidunt posuere. Donec lacinia molestie ornare. Proin sollicitudin urna sed vulputate fermentum. Donec at dapibus purus, non ultricies nunc. Phasellus sagittis magna sit amet orci rutrum condimentum. Praesent in velit eget neque euismod accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur in eros eu pharetra. Vivamus efficitur nisl quis tincidunt posuere. Donec lacinia molestie ornare. Proin sollicitudin urna sed vulputate fermentum. Donec at dapibus purus, non ultricies nunc. Phasellus sagittis magna sit amet orci rutrum condimentum. Praesent in velit eget neque euismod accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur in eros eu pharetra. Vivamus efficitur nisl quis tincidunt posuere. Donec lacinia molestie ornare. Proin sollicitudin urna sed vulputate fermentum. Donec at dapibus purus, non ultricies nunc. Phasellus sagittis magna sit amet orci rutrum condimentum. Praesent in velit eget neque euismod accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="min-w-72 max-w-md relative flex m-auto">
            <picture>
              <img className="w-full aspect-[8/5] object-cover rounded-xl" src="/icons/news1.jpg" alt="" />
            </picture>
            <div className="absolute -top-2 left-2 bg-black/[0.8] text-white rounded-xl px-8 leading-[40px]">Choquequirao - cusco asdf</div>
          </div>
          <div className="min-w-72 max-w-md relative flex m-auto">
            <picture>
              <img className="w-full aspect-[8/5] object-cover rounded-xl" src="/icons/news1.jpg" alt="" />
            </picture>
            <div className="absolute -top-2 left-2 bg-black/[0.8] text-white rounded-xl px-8 leading-[40px]">Choquequirao</div>
          </div>
          <div className="min-w-72 max-w-md relative flex m-auto">
            <picture>
              <img className="w-full aspect-[8/5] object-cover rounded-xl" src="/icons/news1.jpg" alt="" />
            </picture>
            <div className="absolute -top-2 left-2 bg-black/[0.8] text-white rounded-xl px-8 leading-[40px]">Machu Picchu</div>
          </div>
          <div className="min-w-72 max-w-md relative flex m-auto">
            <picture>
              <img className="w-full aspect-[8/5] object-cover rounded-xl" src="/icons/news1.jpg" alt="" />
            </picture>
            <div className="absolute -top-2 left-2 bg-black/[0.8] text-white rounded-xl px-8 leading-[40px]">Cerro de 7 colores</div>
          </div>
        </div>

      </div>

    </main>
  )
}