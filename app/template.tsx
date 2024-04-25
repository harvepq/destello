// Components Imports
import NavBarMobile from "@/app/ui/navbar";
import FooterMobile from "@/app/ui/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarMobile />
      {children}
      <FooterMobile />
    </>
  )
}