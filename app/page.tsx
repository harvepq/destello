import Image from "next/image";

// Import Components
import BlogList from "@/app/ui/home/blog-list";
import ProductList from "@/app/ui/home/product-list";
import ReasonList from "@/app/ui/home/reason-list";

export default function Home() {
  return (
    <main>
      {/* Hero Image */}
      <div>
        <picture>
          <img className="w-full object-cover" src="/icons/news1.jpg" alt="" />
        </picture>
        <h1>Se un Destello andino</h1>
      </div>

      {/* Blogs Section */}
      <section className="flex flex-col items-center gap-8 px-6 bg-[#EFF0F2] py-10">
        <h2 className="text-2xl">Vive Las Mejores Experiencias</h2>
        <BlogList />
      </section>
      {/* Products Section */}

      <section className="flex flex-col items-center gap-8 px-6 py-6">
        <h2 className="text-2xl">Viaja Con Nosotros</h2>
        <ProductList />
      </section>

      {/* Reasons Section */}
      <section className="flex flex-col items-center gap-8 px-6 bg-[#EFF0F2] py-10">
        <h2 className="text-2xl">Por Que Viajar Con Destello Andino</h2>
        <ReasonList />
      </section>
    </main>
  );
}
