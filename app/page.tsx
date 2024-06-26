// Nextjs imports
import Link from "next/link";

// Import Components
import BlogList from "@/app/ui/home/blog-list";
import ProductList from "@/app/ui/home/product-list";
import ReasonList from "@/app/ui/home/reason-list";

export default function Home() {
  return (
    <main>
      {/* Hero Image */}
      <div className="relative w-full flex justify-center">
        <picture className="w-full" >
          <img className="w-full aspect-[4/5] object-cover brightness-[0.7] sm:h-[650px] lg:h-[720px]" src="/hero/hero1.jpg" alt="" />
        </picture>
        <div className="w-[60%] absolute bottom-12 text-center md:text-start md:left-16 lg:left-40 md:w-1/4">
          <h1 className="text-white text-4xl mb-6 text-left md:font-extrabold">
            <span className="block text-left md:hidden">Se un</span>
            <span className="block text-center md:hidden">Destello</span>
            <span className="block text-right md:hidden">Andino</span>
            <span className="hidden md:block md:text-4xl lg:text-5xl">&quot;La vida no se mide por el número de respiraciones que tenemos, sino por los sitios y momentos que nos quitan la respiración.&quot;</span>
          </h1>
          <Link
            href="https://wa.me/51929589891?text=Estoy%20interesado%20en%20viajar%20con%20Destello%20Andino.%20Necesito%20más%20información"
            target="_blank"
            className="bg-[#052659] text-white text-lg font-bold px-6 py-4 rounded-lg hover:bg-white hover:text-black">Solicitar información</Link>
        </div>
      </div>

      {/* Blog Section */}
      <section className="px-4 py-6 bg-[#EFF0F2] lg:px-20 lg:py-12">
        <h2 className="text-2xl text-center mb-4 uppercase font-bold lg:text-4xl lg:mb-8">
          Vive Las Mejores
          <br />
          Experiencias
        </h2>
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:place-items-center xl:grid-cols-4">
          <BlogList />
        </div>
    </section>

      {/* Products Section */}
      <section className="px-4 py-6 lg:px-20 lg:py-12">
        <h2 className="text-2xl text-center mb-4 uppercase font-bold lg:text-4xl lg:mb-8">Viaja Con Nosotros</h2>
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-x-6 sm:gap-y-10 xl:grid-cols-3 2xl:grid-cols-4">
          <ProductList />
        </div>
      </section>

      {/* Reasons Section */}
      <section className="px-6 py-6 bg-[#EFF0F2] lg:px-20 lg:py-12">
        <h2 className="text-2xl text-center mb-6 uppercase font-bold lg:text-4xl lg:mb-8">¿Por Qué Viajar Con <br /> Destello Andino?</h2>
        <div className="flex flex-col items-center sm:items-start gap-8 sm:flex-row sm:justify-center sm:flex-wrap sm:py-10 md:gap-24">
          <ReasonList />
        </div>
      </section>
    </main>
  );
}
