"use client";

import Link from "next/link";
import Image from "next/image"; // <-- Import Image
import { useLanguage } from "@/components/LanguageContext";
import { Globe } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Teswirtak */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            {/* Remplacer YS b photo */}
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#704630]">
              <Image
                src="/fatima-photo.png"
                alt="Fatima Ezzahra BARRADI"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="hidden md:block text-[#704630]">Fatima Ezzahra BARRADI</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8" aria-label="Main navigation">
            <Link
              href="/"
              className="hover:text-[#704630] transition-colors font-medium"
            >
              {t('nav_home')}
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#704630] transition-colors font-medium"
            >
              {t('nav_projects')}
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#704630] transition-colors font-medium"
            >
              {t('nav_contact')}
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-gray-300">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-2 flex items-center gap-1">
              <Globe className="w-3 h-3" />
              {language.toUpperCase()}
            </span>
            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded text-sm font-medium transition-all ${language === 'fr' ? 'bg-white shadow text-[#704630]' : 'text-gray-500 hover:text-gray-900'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-all ${language === 'en' ? 'bg-white shadow text-[#704630]' : 'text-gray-500 hover:text-gray-900'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1 rounded text-sm font-medium transition-all ${language === 'de' ? 'bg-white shadow text-[#704630]' : 'text-gray-500 hover:text-gray-900'}`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}