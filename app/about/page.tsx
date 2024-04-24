import AboutItem from "@/app/ui/about/about-item";
import Engagement from "@/app/ui/about/engagement";

export default function Page() {
  return (
    <main>
      {/* Hero Image */}
      <div className="relative w-full flex justify-center">
        <picture>
          <img className="w-full aspect-[3/2] object-cover brightness-[0.8]" src="/products/product1.jpeg" alt="" />
        </picture>
        <div className="absolute bottom-12 text-center">
          <h2 className="text-white text-3xl">Nosotros</h2>
        </div>
      </div>

      {/* About Section */}
      <section className="flex flex-col items-center gap-12 my-10 px-6">
        <AboutItem />
        <AboutItem />
        <Engagement />
        <AboutItem />
        <AboutItem />
      </section>
    </main>
  )
}