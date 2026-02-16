import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";


const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youssef Aibi | Junior Oracle DBA & Law Graduate",
  description: 
    "Portfolio of Youssef Aibi - Junior Oracle DBA, Law Graduate, and Data Cleansing Specialist. Specializing in Multitenant Architecture, RMAN, and ETL.",
  keywords: [
    "Oracle DBA",
    "Database Administration",
    "Data Cleansing",
    "Migration Specialist",
    "SQL",
    "RMAN",
    "Law Graduate",
  ],
  authors: [{ name: "Youssef Aibi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youssef-aibi.vercel.app",
    siteName: "Youssef Aibi Portfolio",
    title: "Youssef Aibi | Junior Oracle DBA & Law Graduate",
    description:
      "Explore my projects in Oracle Database Administration, Data Migration, and Legal Research.",
    images: [
      {
        url: "https://youssef-aibi.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt:  "Youssef Aibi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Aibi | Junior Oracle DBA & Law Graduate",
    description:
      "Portfolio of Youssef Aibi - Junior Oracle DBA, Law Graduate, and Data Cleansing Specialist.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900`}
      >
      <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}