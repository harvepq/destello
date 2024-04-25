import Link from "next/link"

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
            <picture>
              <img className="w-full aspect-[9/5] object-cover" src="/icons/news1.jpg" alt="" />
            </picture>
            <p className="my-5">En una mercado saturado, donde la calidad de todo producto o servicio es bastante parecida, diferenciarse de tu competencia puede ser un reto.  Uno tiende a pensar que para diferenciase tiene que ser el mejor en el mercado, sin embargo, competir intentando ser el mejor es entrar en una carrera muy competitiva, larga y costosa donde solo gana uno. Y aunque ser el mejor puede ayudarte</p>
            <Link
              className="inline-block border-2 border-[#D2984E] border-solid px-5 py-2 rounded-lg"
              href='/blog/prueba'
            >
              <p>Leer mas</p>
            </Link>
          </div>
        </section>
        <section className="py-10">
          <div className="flex items-center gap-5 mb-2">
            <div className="w-[10%]">
              <span className="block border-t-2 border-[#D2984E]"></span>
            </div>
            <h3 className="uppercase text-[#D2984E]">CATEGORIA</h3>
          </div>
          <div className="px-7">
            <h2 className="uppercase mb-6 text-3xl">Convierte tu viaje en un simbolo de identidad de tu cliente</h2>
            <picture>
              <img className="w-full aspect-[9/5] object-cover" src="/icons/news1.jpg" alt="" />
            </picture>
            <p className="my-5">En una mercado saturado, donde la calidad de todo producto o servicio es bastante parecida, diferenciarse de tu competencia puede ser un reto.  Uno tiende a pensar que para diferenciase tiene que ser el mejor en el mercado, sin embargo, competir intentando ser el mejor es entrar en una carrera muy competitiva, larga y costosa donde solo gana uno. Y aunque ser el mejor puede ayudarte</p>
            <button className="border-2 border-[#D2984E] border-solid px-5 py-2 rounded-lg">Leer mas</button>
          </div>
        </section>
        <section className="py-8">
          <div className="flex items-center gap-5 mb-2">
            <div className="w-[10%]">
              <span className="block border-t-2 border-[#D2984E]"></span>
            </div>
            <h3 className="uppercase text-[#D2984E]">CATEGORIA</h3>
          </div>
          <div className="px-7">
            <h2 className="uppercase mb-6 text-3xl">Convierte tu viaje en un simbolo de identidad de tu cliente</h2>
            <picture>
              <img className="w-full aspect-[9/5] object-cover" src="/icons/news1.jpg" alt="" />
            </picture>
            <p className="my-5">En una mercado saturado, donde la calidad de todo producto o servicio es bastante parecida, diferenciarse de tu competencia puede ser un reto.  Uno tiende a pensar que para diferenciase tiene que ser el mejor en el mercado, sin embargo, competir intentando ser el mejor es entrar en una carrera muy competitiva, larga y costosa donde solo gana uno. Y aunque ser el mejor puede ayudarte</p>
            <button className="border-2 border-[#D2984E] border-solid px-5 py-2 rounded-lg">Leer mas</button>
          </div>
        </section>
      </div>
    </main>
  )
}