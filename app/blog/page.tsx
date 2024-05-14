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
        <picture className="w-full">
          <img className="w-full aspect-[3/2] object-cover brightness-[0.8] sm:h-[480px] md:h-[600px] lg:h-[720px]" src="/hero/hero-blog.jpg" alt="" />
        </picture>
        <div className="absolute text-center">
          <h2 className="text-white text-4xl">Blog</h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {posts.map(post => (
          <section className="py-10 w-full" key={post.id}>
            <div className="flex items-center gap-5 mb-2">
              <div className="w-[10%]">
                <span className="block border-t-2 border-[#D2984E]"></span>
              </div>
              <h3 className="uppercase text-[#D2984E]">{post.category}</h3>
            </div>
            <div className="px-7 m-auto lg:px-20 2xl:w-[1500px]">
              <h2 className="uppercase mb-6 text-3xl">{post.name}</h2>
              <div className="md:flex md:flex-wrap justify-between">
                <picture className="w-full md:max-w-[48%] lg:max-w-[45%]">
                  <img className="w-full aspect-[9/5] object-cover" src={`blog/${post.image}`} alt="" />
                </picture>
                <div className="w-full md:max-w-[48%] lg:max-w-[45%]">
                  <p className="my-5 md:mt-0">{post.extract}</p>
                  <Link
                    className="inline-block border-2 border-[#D2984E] border-solid px-5 py-2 rounded-lg sm:hover:scale-105"
                    href={post.href}
                  >
                    <p>Leer mas</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}