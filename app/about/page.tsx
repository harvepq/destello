import AboutItem from "@/app/ui/about/about-item";
import Engagement from "@/app/ui/about/engagement";

import { fetchAboutData } from "@/app/lib/data";

export default function Page() {
  const about = fetchAboutData()

  return (
    <main>
      {/* Hero Image */}
      <div className="relative w-full flex flex-col justify-center items-center">
        <picture>
          <img className="w-full aspect-[3/2] object-cover brightness-[0.8]" src="/products/product1.jpeg" alt="" />
        </picture>
        <div className="absolute text-center">
          <h2 className="text-white text-4xl">Nosotros</h2>
        </div>
      </div>

      {/* About Section */}
      <section className="flex flex-col items-center gap-8 my-4 px-6">
        <AboutItem item={about.we_are} slogan="Somos los mejores"/>
        <AboutItem item={about.we_do} slogan="Hacemos que sea lo mejor"/>
        <Engagement item={about.engagement}/>
        <AboutItem item={about.mission} slogan="Ser lo mejores agentes"/>
        <AboutItem item={about.vision} slogan="Llegar la empresa mas grande del mundo"/>
      </section>
    </main>
  )
}