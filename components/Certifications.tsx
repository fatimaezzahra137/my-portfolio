"use client";

import Image from "next/image";
import { Award } from "lucide-react";

const certifications = [
  {
    id: 3,
    title: "Formation SQL/PLSQL",
    issuer: "Supemir Académie",
    date: "2025 – 2026",
    image: "/plsql.png",
  },
  {
    id: 6,
    title: "Études de langue allemande",
    issuer: "Elite Deutsch Sprachezentrum",
    date: "Novembre 2024",
    image: "/elite-deutsch.png", // Renamed to remove space
  },
  {
    id: 4,
    title: "Formation IA Générative",
    issuer: "Gomycode",
    date: "Octobre 2024",
    image: "/gomycode.png",
  },
  {
    id: 5,
    title: "Formation C4EE",
    issuer: "Université Hassan II",
    date: "Juillet 2024",
    image: "/c4ee.png",
  },
  {
    id: 1,
    title: "Licence en Mathématiques et Informatique",
    issuer: "FSB Casablanca",
    date: "2024–2025",
    image: "/hassan2-logo.png", // Logo de l'Université Hassan II
  }
];

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Certifications">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-[#704630] flex items-center justify-center gap-3">
            <Award className="w-10 h-10" />
            Certifications
          </h2>
          <p className="text-lg text-gray-700">
            Mes qualifications académiques et professionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col items-center text-center group"
            >
              {/* Logo Container */}
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#F8E8E8] group-hover:border-[#E6C0CB] transition-colors bg-white flex items-center justify-center">
                 {/* Fallback Icon (kayban ila ma kantch tswira) */}
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400">
                    <Award className="w-8 h-8" />
                 </div>
                 {/* Image */}
                 <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-contain p-2"
                    // Hada bach ykhbi l-image ila malqahach w ykhlli l-icon tban
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // En cas d'erreur, on cache l'élément <img> pour que l'icône de secours soit visible.
                        console.error(`Erreur de chargement pour l'image : ${cert.image}`);
                        target.style.display = 'none';
                    }}
                 />
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 mb-1">{cert.title}</h3>
                <p className="text-sm text-[#704630] font-medium mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>

              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-[#F8E8E8] text-[#704630] font-semibold rounded-lg text-sm hover:bg-[#E6C0CB] transition-colors w-full sm:w-auto"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}