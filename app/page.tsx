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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-4xl mx-auto">
          
          <div className="p-8 bg-white rounded-2xl border border-red-100 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-red-100 rounded-full">
                <Briefcase className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 text-center">
                Professional Philosophy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <Search className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Analytical Rigor</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Applying legal analytical skills to interpret complex data structures and ensure logical consistency.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Data Integrity</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Uncompromising standards for data security, accuracy, and reliability in every migration project.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Performance Focus</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Optimizing database environments for maximum speed, efficiency, and high availability.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Brain className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Continuous Growth</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Committed to lifelong learning, staying ahead with the latest Oracle technologies and AI trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
              <p className="italic text-gray-700 font-medium">
                "Bridging the gap between <span className="text-red-600 font-bold">Legal Logic</span> and <span className="text-red-600 font-bold">Technical Precision</span> to build robust data solutions."
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors shadow-lg hover:shadow-red-200"
            >
              View All Projects & Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}