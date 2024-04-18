import NavBarMobile from "@/app/ui/navbar-mobile";
import FooterMobile from "@/app/ui/footer-mobile";
import AboutItem from "@/app/ui/about/about-item";
import Engagement from "@/app/ui/about/engagement";

export default function Page() {
  return (
    <main>
      <NavBarMobile />
      {/* Hero Image */}
      <div>
        <picture>
          <img src="/products/product1.jpeg" alt="" />
          <div>Nosotros</div>
        </picture>
      </div>
      <section className="flex flex-col items-center gap-12 my-10 px-6">
        <AboutItem />
        <AboutItem />
        <Engagement />
        <AboutItem />
        <AboutItem />
      </section>

      <FooterMobile />
    </main>
  )
}