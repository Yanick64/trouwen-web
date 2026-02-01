import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Martine & Yanick - Onze Bruiloft",
  description: "We gaan trouwen! Jullie zijn van harte uitgenodigd om onze speciale dag met ons te vieren.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="bg-olive-dark">
      <body className={`${cormorantGaramond.variable} ${cormorantGaramond.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
