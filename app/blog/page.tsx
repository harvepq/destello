export default function Page() {
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
      <h3>
        Todo lo que necitas saber
      </h3>
    </main>
  )
}