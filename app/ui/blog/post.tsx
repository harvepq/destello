'use client'

// Nextjs Imports
import { useRouter } from "next/navigation";

// Data Imports
import { fetchPostBySlug } from "@/app/lib/data";

export default function Post(slug: any) {
  const post = fetchPostBySlug(slug.slug)
  const postImages = post.images.slice(1)
  const route = useRouter()

  return (
    <main className="relative">
      <div className="p-4 absolute z-10 md:hidden">
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
          <img className="w-full aspect-[3/2] object-cover brightness-[0.8] sm:h-[480px] md:h-[600px] lg:h-[720px]" src={`/blog/${post.images[0]}`}alt="" />
        </picture>
      </div>
      <div className="my-4 px-8 lg:px-20">
        <div className="max-w-md mx-auto md:max-w-3xl">
          <h2 className="text-4xl mb-6 mt-2 uppercase md:mt-10">{post.name}</h2>
          <div className="flex flex-col gap-4 text-gray-600">
            {post.description.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          {postImages.map(image => (
            <div className="min-w-72 max-w-md relative flex m-auto md:max-w-3xl" key={image}>
              <picture>
                <img className="w-full aspect-[8/5] object-cover rounded-xl" src={`/blog/${image}`} alt="" />
              </picture>
              {/* <div className="absolute -top-2 left-2 bg-black/[0.8] text-white rounded-xl px-8 leading-[40px]">Choquequirao - cusco asdf</div> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}