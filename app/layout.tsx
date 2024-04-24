// Next Imports
import type { Metadata } from "next";
import { Sansita } from "next/font/google";

// React Imports

// Components Imports
import NavBarMobile from "@/app/ui/navbar-mobile";
import FooterMobile from "@/app/ui/footer-mobile";

// Styles Imports
import "./globals.css";

// Font Configuration
const sansita = Sansita({ weight:['400','700','800'], subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "Destello Andino",
  description: "Vivir una experiencia con Destello Andino es inolvidable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sansita.className}>
        <NavBarMobile />
        {children}
        <FooterMobile />
      </body>
    </html>
  );
}
