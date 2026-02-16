"use client";

import Link from "next/link";
import Image from "next/image"; // <-- Import Image

export default function Navbar() {
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
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-red-700">
              <Image
                src="/youssef-photo.png" // <-- Dir tswirtk hna f public folder
                alt="Youssef Aibi"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-red-700">Youssef Aibi</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8" aria-label="Main navigation">
            <Link
              href="/"
              className="hover:text-red-700 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="hover:text-red-700 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-red-700 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}