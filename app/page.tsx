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
          <img className="w-full aspect-[4/5] object-cover brightness-[0.8] sm:h-[650px] lg:h-[720px]" src="/icons/news1.jpg" alt="" />
        </picture>
        <div className="w-[60%] absolute bottom-12 text-center">
          <h1 className="text-white text-4xl mb-6 text-left">
            <span className="block text-left">Se un</span>
            <span className="block text-center">Destello</span>
            <span className="block text-right">Andino</span>
          </h1>
          <button className="bg-[#052659] text-white text-lg px-6 h-12 rounded-lg hover:bg-white hover:text-black">Solicitar tu viaje</button>
        </div>
      </div>

      {/* Blog Section */}
      <section className="px-4 py-6 bg-[#EFF0F2] lg:px-20">
        <h2 className="text-2xl text-center mb-4">
          Vive Las Mejores
          <br />
          Experiencias
        </h2>
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:place-items-center xl:grid-cols-4">
          <BlogList />
        </div>
    </section>

      {/* Products Section */}
      <section className="px-4 py-6 lg:px-20">
        <h2 className="text-2xl text-center mb-4">Viaja Con Nosotros</h2>
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-x-6 sm:gap-y-10 xl:grid-cols-3 2xl:grid-cols-4">
          <ProductList />
        </div>
      </section>

      {/* Reasons Section */}
      <section className="flex flex-col items-center gap-8 px-6 py-6 bg-[#EFF0F2]">
        <h2 className="text-2xl text-center">Por Que Viajar Con <br /> Destello Andino</h2>
        <ReasonList />
      </section>
    </main>
  );
}
