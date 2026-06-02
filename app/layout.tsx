import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "URBASPHERE CONTRACTORS",
  description: "Entreprise marocaine spécialisée dans les travaux industriels, publics et du bâtiment.",
  icons: {
    icon: "/favicon-upload/Urbasphere-favicon-01-square.png",
    shortcut: "/favicon-upload/Urbasphere-favicon-01-square.png",
    apple: "/favicon-upload/Urbasphere-favicon-01-square.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden bg-background font-hanken text-on-background" suppressHydrationWarning>
        <Header />
        <RevealOnScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
