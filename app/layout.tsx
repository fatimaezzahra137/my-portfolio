import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/components/LanguageContext";


const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatima Ezzahra BARRADI | Étudiante Ingénieure en Data & BI",
  description:
    "Portfolio de Fatima Ezzahra BARRADI, étudiante ingénieure en Data & Business Intelligence. Passionnée par la structure des données, l'optimisation et l'IA.",
  keywords: [
    "Data",
    "Business Intelligence",
    "Python",
    "SQL",
    "Machine Learning",
    "Flask",
    "Django",
    "Data Analysis",
    "Fatima Ezzahra BARRADI",
  ],
  authors: [{ name: "Fatima Ezzahra BARRADI" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://my-portfolio-sigma-three-81.vercel.app/", // Mettez à jour avec votre URL
    siteName: "Portfolio de Fatima Ezzahra BARRADI",
    title: "Fatima Ezzahra BARRADI | Étudiante Ingénieure en Data & BI",
    description:
      "Découvrez les projets de Fatima Ezzahra BARRADI en Data, IA et développement web.",
    images: [
      {
        url: "https://my-portfolio-sigma-three-81.vercel.app/og-image.png", // Mettez à jour avec votre URL
        width: 1200,
        height: 630,
        alt: "Portfolio de Fatima Ezzahra BARRADI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Ezzahra BARRADI | Étudiante Ingénieure en Data & BI",
    description:
      "Portfolio de Fatima Ezzahra BARRADI, étudiante ingénieure en Data & Business Intelligence.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}:  Readonly<{
  children: React. ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body suppressHydrationWarning={true}
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <Toaster position="top-right" />
        </LanguageProvider>
      </body>
    </html>
  );
}