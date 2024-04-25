// Components Imports
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}