"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      aria-label="Hero section"
      style={{
        background: 'linear-gradient(135deg, #F8E8E8 0%, #ffffff 100%)',
      }}
    >
      {/* الخلفيات المتحركة */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F8E8E8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* النص - على اليسار */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up">
          {/* العنوان الرئيسي */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {t('greeting')} <br className="hidden lg:block" />
              <span className="text-[#704630]">Fatima Ezzahra BARRADI</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800 font-semibold">
              {t('role')}
            </p>
          </div>

          {/* الوصف */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t('hero_desc')}
          </p>

          {/* أزرار CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#704630] text-white font-semibold rounded-lg hover:bg-[#5a3826] hover:shadow-xl transition-all duration-300"
              aria-label="View my projects"
            >
              {t('view_projects')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#704630] font-semibold rounded-lg border-2 border-[#704630] hover:bg-[#F8E8E8] transition-all duration-300"
              aria-label="Get in touch"
            >
              {t('get_in_touch')}
            </Link>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Fatima_Ezzahra_BARRADI_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              {t('download_cv')}
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* الأيقونات - محدثة */}
          <div className="pt-10">
            <p className="text-center lg:text-left text-gray-700 mb-6 font-semibold text-lg">
              {t('connect_with_me')}
            </p>
            
            <div className="flex justify-center lg:justify-start items-end gap-6">
              
              {/* GitHub */}
              <a
                href="https://github.com/fatimaezzahra137"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="GitHub profile"
              >
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-900 transition-all duration-300 mb-2 group-hover:bg-gray-900">
                  <Github className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">GitHub</span>
              </a>
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/fati-barradi-1b8776312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="LinkedIn profile"
              >
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-600 transition-all duration-300 mb-2 group-hover:bg-blue-600">
                  <Linkedin className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">LinkedIn</span>
              </a>
              
              {/* Email */}
              <a
                href="mailto:fbaradi52@gmail.com"
                className="flex flex-col items-center group"
                aria-label="Email me"
              >
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-[#704630] transition-all duration-300 mb-2 group-hover:bg-[#704630]">
                  <Mail className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#704630]">Email</span>
              </a>
              
            </div>
          </div>
        </div>

        {/* صورتك الشخصية - على اليمين */}
        <div className="lg:w-1/2 flex justify-center animate-slide-in-left">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* خلفية دائرية */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E6C0CB] to-gray-400 rounded-full opacity-20 blur-xl"></div>
            
            {/* صورتك الشخصية */}
            <div className="relative w-full h-full">
              <Image
                src="/fatima-photo.png"
                alt="Fatima Ezzahra BARRADI - Étudiante ingénieure en Data & Business Intelligence"
                fill
                className="object-cover rounded-full border-8 border-white shadow-2xl"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
            
            {/* عناصر زخرفية */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#E6C0CB] rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300 rounded-full opacity-50"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}