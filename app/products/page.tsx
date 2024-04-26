import ProductList from "@/app/ui/home/product-list"

export default function Page() {
  return (
    <main>
      {/* Hero Image */}
      <div className="relative w-full flex flex-col justify-center items-center">
        <picture className="w-full">
          <img className="w-full aspect-[3/2] object-cover brightness-[0.8] sm:h-[480px] md:h-[600px] lg:h-[720px]" src="/products/product1.jpeg" alt="" />
        </picture>
        <div className="absolute text-center">
          <h2 className="text-white text-4xl">Productos</h2>
        </div>
      </div>
      <section className="py-10">
        <div className="flex items-center gap-5 mb-2">
          <div className="w-[10%]">
            <span className="block border-t-2 border-[#D2984E]"></span>
          </div>
          <h3 className="uppercase text-[#D2984E]">nuesstros productos</h3>
        </div>
        <div className="px-7 lg:px-20">
          <h2 className="uppercase mb-6 text-3xl">Convierte tu viaje en un simbolo de identidad de tu cliente</h2>
          <div className="flex flex-col gap-6 items-center sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-x-6 sm:gap-y-10 xl:grid-cols-3 2xl:grid-cols-4">
            <ProductList />
          </div>
        </div>
      </section>
    </main>
  )
}