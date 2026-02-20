"use client";

import Image from "next/image";
import { Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Oracle Database Administration", // الأحدث
    issuer: "JobInTech / SUPEMIR",
    date: "2026",
    image: "/oracle.png",
  },
  {
    id: 2,
    title: "CSS",
    issuer: "Codecademy",
    date: "Jan 2026",
    image: "/codecademy-css.png",
  },
  {
    id: 3,
    title: "HTML",
    issuer: "Codecademy",
    date: "Jan 2026",
    image: "/codecademy-html.png",
  },
  {
    id: 4,
    title: "How to use AI with SQL",
    issuer: "Codecademy",
    date: "Dec 2025",
    image: "/codecademy-ai.png",
  },
  {
    id: 5,
    title: "SQL",
    issuer: "Codecademy",
    date: "Dec 2025",
    image: "/codecademy-sql.png",
  },
  {
    id: 6,
    title: "English Level 5",
    issuer: "American Language Center",
    date: "Dec 2025",
    image: "/alc.png",
  },
  {
    id: 7,
    title: "Private Law Degree", // الأقدم
    issuer: "Hassan II University",
    date: "Graduated",
    image: "/university.png",
  }
];

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Certifications">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-red-700 flex items-center justify-center gap-3">
            <Award className="w-10 h-10" />
            Certifications
          </h2>
          <p className="text-lg text-gray-700">
            My academic and professional qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col items-center text-center group"
            >
              {/* Logo Container */}
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-red-50 group-hover:border-red-100 transition-colors bg-white flex items-center justify-center">
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
                        target.style.opacity = '0'; 
                    }}
                 />
              </div>
              
              <h3 className="font-bold text-gray-900 mb-1">{cert.title}</h3>
              <p className="text-sm text-red-600 font-medium mb-2">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}