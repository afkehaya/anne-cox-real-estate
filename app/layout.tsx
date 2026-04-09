import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anne Cox | Luxury Ojai Valley Real Estate",
  description: "Anne Cox is a luxury real estate specialist in Ojai Valley, California. Expert guidance for buying and selling exceptional properties in Montecito, Ojai, and Ventura County.",
  keywords: "luxury real estate, Ojai, Montecito, Ventura County, Anne Cox, property, estate, home for sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#faf9f7] text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}
