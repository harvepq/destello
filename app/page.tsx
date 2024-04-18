import Image from "next/image";

// Import Components
import NavBarMobile from "@/app/ui/navbar-mobile";
import FooterMobile from "@/app/ui/footer-mobile";
import NewsCard from "@/app/ui/news-card";
import ProductCard from "@/app/ui/product-card";
import ReasonCard from "@/app/ui/reason-card";

export default function Home() {
  return (
    <main>
      <NavBarMobile />
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
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
      {/* Products Section */}
      <section className="flex flex-col items-center gap-8 px-6 py-6">
        <h2 className="text-2xl">Viaja Con Nosotros</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      {/* Reasons Section */}
      <section className="flex flex-col items-center gap-8 px-6 bg-[#EFF0F2] py-10">
        <h2 className="text-2xl">Por Que Viajar Con Destello Andino</h2>
        <ReasonCard />
        <ReasonCard />
        <ReasonCard />
        <ReasonCard />
      </section>
      <FooterMobile />
    </main>
  );
}
