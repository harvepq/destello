import type { Metadata } from "next";
import { Sansita } from "next/font/google";
import "./globals.css";

const sansita = Sansita({ weight:['400','700','800'], subsets: ["latin"] });

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
      <body className={sansita.className}>{children}</body>
    </html>
  );
}
