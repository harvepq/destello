// Nextjs Imports
import type { Metadata } from "next";
import { Cuprum } from "next/font/google";

// Styles Imports
import "./globals.css";

// Font Configuration
const curpum = Cuprum({ weight:['400','500','600', '700'], subsets: ["latin"] });

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
      <body className={curpum.className}>
        {children}
      </body>
    </html>
  );
}
