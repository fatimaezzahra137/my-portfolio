"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Link from "next/link";
import { ArrowRight, Briefcase, Search, Shield, Zap, Brain } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Certifications Section */}
      <Certifications />

      {/* Competitive Mindset Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8E8E8]">
        <div className="max-w-4xl mx-auto">
          
          <div className="p-8 bg-white rounded-2xl border border-[#E6C0CB] shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-[#F8E8E8] rounded-full">
                <Briefcase className="w-8 h-8 text-[#704630]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 text-center">
                Philosophie Professionnelle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-[#F8E8E8] rounded-lg">
                    <Search className="w-5 h-5 text-[#704630]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Rigueur Analytique</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Application de la logique mathématique pour interpréter des structures de données complexes et assurer leur cohérence.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-[#F8E8E8] rounded-lg">
                    <Shield className="w-5 h-5 text-[#704630]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Intégrité des Données</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Normes strictes pour la sécurité, la précision et la fiabilité des données dans chaque projet.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-[#F8E8E8] rounded-lg">
                    <Zap className="w-5 h-5 text-[#704630]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Performance & Optimisation</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Optimisation des environnements de données pour une efficacité et une rapidité maximales.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-[#F8E8E8] rounded-lg">
                    <Brain className="w-5 h-5 text-[#704630]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Apprentissage Continu</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Engagement envers l'apprentissage continu des nouvelles technologies Data & IA.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
              <p className="italic text-gray-700 font-medium">
                "Allier la <span className="text-[#704630] font-bold">Logique Mathématique</span> à la <span className="text-[#704630] font-bold">Précision Technique</span> pour bâtir des solutions de données robustes."
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#704630] text-white font-semibold rounded-lg hover:bg-[#5a3826] transition-colors shadow-lg hover:shadow-[#F8E8E8]"
            >
              Voir tous mes projets
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}