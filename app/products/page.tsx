import Link from "next/link"
import ProductCard from "../ui/product-card"

export default function Page() {
  return (
    <main>
      {/* Hero Image */}
      <div className="relative w-full flex flex-col justify-center items-center">
        <picture>
          <img className="w-full aspect-[3/2] object-cover brightness-[0.8]" src="/products/product1.jpeg" alt="" />
        </picture>
        <div className="absolute text-center">
          <h2 className="text-white text-4xl">Productos</h2>
        </div>
      </div>
      <div className="my-2 flex flex-col items-center">
        <section className="py-10">
          <div className="flex items-center gap-5 mb-2">
            <div className="w-[10%]">
              <span className="block border-t-2 border-[#D2984E]"></span>
            </div>
            <h3 className="uppercase text-[#D2984E]">CATEGORIA</h3>
          </div>
          <div className="px-7">
            <h2 className="uppercase mb-6 text-3xl">Convierte tu viaje en un simbolo de identidad de tu cliente</h2>
            <div className="flex flex-col gap-6">
              <ProductCard name="Salkantay" image="/icons/news2.jpg" items={{duration: "3 Dias - 2 Noches", tour: "En grupo"}} prices={{dollars: "234", soles: "353"}}/>
              <ProductCard name="Salkantay" image="/icons/news2.jpg" items={{duration: "3 Dias - 2 Noches", tour: "En grupo"}} prices={{dollars: "234", soles: "353"}}/>
              <ProductCard name="Salkantay" image="/icons/news2.jpg" items={{duration: "3 Dias - 2 Noches", tour: "En grupo"}} prices={{dollars: "234", soles: "353"}}/>
              <ProductCard name="Salkantay" image="/icons/news2.jpg" items={{duration: "3 Dias - 2 Noches", tour: "En grupo"}} prices={{dollars: "234", soles: "353"}}/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}