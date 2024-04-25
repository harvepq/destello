// Nextjs Imports
import Link from "next/link"

// Data Imports
import { fetchPosts } from "@/app/lib/data"

export default function Page() {
  const posts = fetchPosts()

  return (
    <main>
      {/* Hero Image */}
      <div className="relative w-full flex flex-col justify-center items-center">
        <picture>
          <img className="w-full aspect-[3/2] object-cover brightness-[0.8]" src="/products/product1.jpeg" alt="" />
        </picture>
        <div className="absolute text-center">
          <h2 className="text-white text-4xl">Blog</h2>
        </div>
      </div>
      <div className="my-2 flex flex-col items-center">
        {posts.map(post => (
          <section className="py-10" key={post.id}>
            <div className="flex items-center gap-5 mb-2">
              <div className="w-[10%]">
                <span className="block border-t-2 border-[#D2984E]"></span>
              </div>
              <h3 className="uppercase text-[#D2984E]">{post.category}</h3>
            </div>
            <div className="px-7">
              <h2 className="uppercase mb-6 text-3xl">{post.name}</h2>
              <picture>
                <img className="w-full aspect-[9/5] object-cover" src={post.image} alt="" />
              </picture>
              <p className="my-5">{post.extract}</p>
              <Link
                className="inline-block border-2 border-[#D2984E] border-solid px-5 py-2 rounded-lg"
                href={post.href}
              >
                <p>Leer mas</p>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}